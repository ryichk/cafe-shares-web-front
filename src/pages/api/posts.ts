import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql/lib/types';
import { Amplify, API, Storage } from 'aws-amplify';
import { NextApiRequest, NextApiResponse } from 'next';

import { ModelSortDirection, Post, PostsByDateQueryVariables, PostsByDateQuery } from '../../API';
import awsExports from '../../aws-exports';
import { postsByDate } from '../../graphql/queries';

Amplify.configure({ ...awsExports, ssr: true });

export interface PostsAPIResponse {
  posts: Array<Post | null>;
  nextToken?: string | null;
}

const responsePostsData = async (
  req: NextApiRequest,
  res: NextApiResponse<PostsAPIResponse>,
): Promise<void> => {
  const posts: Array<Post | null> = [];
  let nextToken;
  try {
    const cafeId = req.query.cafeId as string;
    let options = {};
    if (cafeId !== 'null') {
      options = {
        cafeId: { eq: cafeId },
      };
    }

    let _nextToken = req.query.nextToken as string;
    if (_nextToken === '0') _nextToken = null;

    const postsByDateQueryVariables: PostsByDateQueryVariables = {
      type: 'Post',
      filter: options,
      sortDirection: ModelSortDirection.DESC,
      limit: 10,
      nextToken: _nextToken,
    };
    const response = await API.graphql({
      query: postsByDate,
      variables: postsByDateQueryVariables,
      authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
    });
    if ('data' in response && response.data) {
      const getPostData = response.data as PostsByDateQuery;
      const listPosts = getPostData.postsByDate;
      nextToken = listPosts.nextToken;
      if (listPosts.items) {
        for (const post of listPosts.items) {
          const pictureURLs = [];
          for (const picture of post.pictures) {
            const pictureURL = await Storage.get(picture);
            pictureURLs.push(pictureURL);
          }
          const postObject: Post = {
            __typename: 'Post',
            id: post.id,
            cafeId: post.cafeId,
            cafeName: post.cafeName,
            content: post.content,
            pictures: pictureURLs,
            owner: post.owner,
            createdAt: post.createdAt,
            updatedAt: post.updatedAt,
          };
          posts.push(postObject);
        }
      }
    }
  } catch (error) {
    console.error(error);
  }

  res.status(200).json({ posts, nextToken });
};

export default responsePostsData;
