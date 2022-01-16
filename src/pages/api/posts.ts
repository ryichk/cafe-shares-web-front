import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql/lib/types';
import { Amplify, API, Storage } from 'aws-amplify';
import { NextApiRequest, NextApiResponse } from 'next';

import { ModelSortDirection, Post, PostsByDateQueryVariables, PostsByDateQuery } from '../../API';
import awsExports from '../../aws-exports';
import { postsByDate } from '../../graphql/queries';

Amplify.configure({ ...awsExports, ssr: true });

export interface PostsAPIResponse {
  posts: Array<Post | null>;
}

const responsePostsData = async (
  req: NextApiRequest,
  res: NextApiResponse<PostsAPIResponse>,
): Promise<void> => {
  const posts: Array<Post | null> = [];
  try {
    const options = {
      cafeId: { eq: req.query.cafeId as string },
    };
    const postsByDateQueryVariables: PostsByDateQueryVariables = {
      type: 'Post',
      filter: options,
      sortDirection: ModelSortDirection.DESC,
    };
    const response = await API.graphql({
      query: postsByDate,
      variables: postsByDateQueryVariables,
      authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
    });
    if ('data' in response && response.data) {
      const getPostData = response.data as PostsByDateQuery;
      const listPosts = getPostData.postsByDate;
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

  res.status(200).json({ posts });
};

export default responsePostsData;
