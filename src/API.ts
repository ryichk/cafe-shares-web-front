/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  id?: string | null;
  cafeId: string;
  cafeName: string;
  content?: string | null;
  picture: string;
};

export type ModelPostConditionInput = {
  cafeId?: ModelStringInput | null;
  cafeName?: ModelStringInput | null;
  content?: ModelStringInput | null;
  picture?: ModelStringInput | null;
  and?: Array<ModelPostConditionInput | null> | null;
  or?: Array<ModelPostConditionInput | null> | null;
  not?: ModelPostConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Post = {
  __typename: 'Post';
  id: string;
  cafeId: string;
  cafeName: string;
  content?: string | null;
  picture: string;
  tags?: ModelPostTagsConnection | null;
  comments?: ModelCommentConnection | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ModelPostTagsConnection = {
  __typename: 'ModelPostTagsConnection';
  items: Array<PostTags>;
  nextToken?: string | null;
};

export type PostTags = {
  __typename: 'PostTags';
  id: string;
  postID: string;
  tagID: string;
  post: Post;
  tag: Tag;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type Tag = {
  __typename: 'Tag';
  id: string;
  label: string;
  posts?: ModelPostTagsConnection | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ModelCommentConnection = {
  __typename: 'ModelCommentConnection';
  items: Array<Comment>;
  nextToken?: string | null;
};

export type Comment = {
  __typename: 'Comment';
  id: string;
  postID: string;
  post?: Post | null;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeletePostInput = {
  id: string;
};

export type UpdatePostInput = {
  id: string;
  cafeId?: string | null;
  cafeName?: string | null;
  content?: string | null;
  picture?: string | null;
};

export type CreateTagInput = {
  id?: string | null;
  label: string;
};

export type ModelTagConditionInput = {
  label?: ModelStringInput | null;
  and?: Array<ModelTagConditionInput | null> | null;
  or?: Array<ModelTagConditionInput | null> | null;
  not?: ModelTagConditionInput | null;
};

export type CreateCommentInput = {
  id?: string | null;
  postID: string;
  content: string;
};

export type ModelCommentConditionInput = {
  postID?: ModelIDInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelCommentConditionInput | null> | null;
  or?: Array<ModelCommentConditionInput | null> | null;
  not?: ModelCommentConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type DeleteCommentInput = {
  id: string;
};

export type UpdateCommentInput = {
  id: string;
  postID?: string | null;
  content?: string | null;
};

export type CreateFollowRelationshipInput = {
  followeeId: string;
  followerId: string;
  id?: string | null;
};

export type ModelFollowRelationshipConditionInput = {
  followeeId?: ModelIDInput | null;
  followerId?: ModelIDInput | null;
  and?: Array<ModelFollowRelationshipConditionInput | null> | null;
  or?: Array<ModelFollowRelationshipConditionInput | null> | null;
  not?: ModelFollowRelationshipConditionInput | null;
};

export type FollowRelationship = {
  __typename: 'FollowRelationship';
  followeeId: string;
  followerId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteFollowRelationshipInput = {
  id: string;
};

export type CreatePostTagsInput = {
  id?: string | null;
  postID: string;
  tagID: string;
};

export type ModelPostTagsConditionInput = {
  postID?: ModelIDInput | null;
  tagID?: ModelIDInput | null;
  and?: Array<ModelPostTagsConditionInput | null> | null;
  or?: Array<ModelPostTagsConditionInput | null> | null;
  not?: ModelPostTagsConditionInput | null;
};

export type UpdatePostTagsInput = {
  id: string;
  postID?: string | null;
  tagID?: string | null;
};

export type DeletePostTagsInput = {
  id: string;
};

export type ModelFollowRelationshipFilterInput = {
  followeeId?: ModelIDInput | null;
  followerId?: ModelIDInput | null;
  and?: Array<ModelFollowRelationshipFilterInput | null> | null;
  or?: Array<ModelFollowRelationshipFilterInput | null> | null;
  not?: ModelFollowRelationshipFilterInput | null;
};

export type ModelFollowRelationshipConnection = {
  __typename: 'ModelFollowRelationshipConnection';
  items: Array<FollowRelationship>;
  nextToken?: string | null;
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null;
  cafeId?: ModelStringInput | null;
  cafeName?: ModelStringInput | null;
  content?: ModelStringInput | null;
  picture?: ModelStringInput | null;
  and?: Array<ModelPostFilterInput | null> | null;
  or?: Array<ModelPostFilterInput | null> | null;
  not?: ModelPostFilterInput | null;
};

export type ModelPostConnection = {
  __typename: 'ModelPostConnection';
  items: Array<Post>;
  nextToken?: string | null;
};

export type ModelTagFilterInput = {
  id?: ModelIDInput | null;
  label?: ModelStringInput | null;
  and?: Array<ModelTagFilterInput | null> | null;
  or?: Array<ModelTagFilterInput | null> | null;
  not?: ModelTagFilterInput | null;
};

export type ModelTagConnection = {
  __typename: 'ModelTagConnection';
  items: Array<Tag>;
  nextToken?: string | null;
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null;
  postID?: ModelIDInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelCommentFilterInput | null> | null;
  or?: Array<ModelCommentFilterInput | null> | null;
  not?: ModelCommentFilterInput | null;
};

export type ModelPostTagsFilterInput = {
  id?: ModelIDInput | null;
  postID?: ModelIDInput | null;
  tagID?: ModelIDInput | null;
  and?: Array<ModelPostTagsFilterInput | null> | null;
  or?: Array<ModelPostTagsFilterInput | null> | null;
  not?: ModelPostTagsFilterInput | null;
};

export type CreatePostMutationVariables = {
  input: CreatePostInput;
  condition?: ModelPostConditionInput | null;
};

export type CreatePostMutation = {
  createPost?: {
    __typename: 'Post';
    id: string;
    cafeId: string;
    cafeName: string;
    content?: string | null;
    picture: string;
    tags?: {
      __typename: 'ModelPostTagsConnection';
      items: Array<{
        __typename: 'PostTags';
        id: string;
        postID: string;
        tagID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: 'ModelCommentConnection';
      items: Array<{
        __typename: 'Comment';
        id: string;
        postID: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type DeletePostMutationVariables = {
  input: DeletePostInput;
  condition?: ModelPostConditionInput | null;
};

export type DeletePostMutation = {
  deletePost?: {
    __typename: 'Post';
    id: string;
    cafeId: string;
    cafeName: string;
    content?: string | null;
    picture: string;
    tags?: {
      __typename: 'ModelPostTagsConnection';
      items: Array<{
        __typename: 'PostTags';
        id: string;
        postID: string;
        tagID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: 'ModelCommentConnection';
      items: Array<{
        __typename: 'Comment';
        id: string;
        postID: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput;
  condition?: ModelPostConditionInput | null;
};

export type UpdatePostMutation = {
  updatePost?: {
    __typename: 'Post';
    id: string;
    cafeId: string;
    cafeName: string;
    content?: string | null;
    picture: string;
    tags?: {
      __typename: 'ModelPostTagsConnection';
      items: Array<{
        __typename: 'PostTags';
        id: string;
        postID: string;
        tagID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: 'ModelCommentConnection';
      items: Array<{
        __typename: 'Comment';
        id: string;
        postID: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type CreateTagMutationVariables = {
  input: CreateTagInput;
  condition?: ModelTagConditionInput | null;
};

export type CreateTagMutation = {
  createTag?: {
    __typename: 'Tag';
    id: string;
    label: string;
    posts?: {
      __typename: 'ModelPostTagsConnection';
      items: Array<{
        __typename: 'PostTags';
        id: string;
        postID: string;
        tagID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput;
  condition?: ModelCommentConditionInput | null;
};

export type CreateCommentMutation = {
  createComment?: {
    __typename: 'Comment';
    id: string;
    postID: string;
    post?: {
      __typename: 'Post';
      id: string;
      cafeId: string;
      cafeName: string;
      content?: string | null;
      picture: string;
      tags?: {
        __typename: 'ModelPostTagsConnection';
        nextToken?: string | null;
      } | null;
      comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    content: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput;
  condition?: ModelCommentConditionInput | null;
};

export type DeleteCommentMutation = {
  deleteComment?: {
    __typename: 'Comment';
    id: string;
    postID: string;
    post?: {
      __typename: 'Post';
      id: string;
      cafeId: string;
      cafeName: string;
      content?: string | null;
      picture: string;
      tags?: {
        __typename: 'ModelPostTagsConnection';
        nextToken?: string | null;
      } | null;
      comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    content: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput;
  condition?: ModelCommentConditionInput | null;
};

export type UpdateCommentMutation = {
  updateComment?: {
    __typename: 'Comment';
    id: string;
    postID: string;
    post?: {
      __typename: 'Post';
      id: string;
      cafeId: string;
      cafeName: string;
      content?: string | null;
      picture: string;
      tags?: {
        __typename: 'ModelPostTagsConnection';
        nextToken?: string | null;
      } | null;
      comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    content: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type CreateFollowRelationshipMutationVariables = {
  input: CreateFollowRelationshipInput;
  condition?: ModelFollowRelationshipConditionInput | null;
};

export type CreateFollowRelationshipMutation = {
  createFollowRelationship?: {
    __typename: 'FollowRelationship';
    followeeId: string;
    followerId: string;
    id: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type DeleteFollowRelationshipMutationVariables = {
  input: DeleteFollowRelationshipInput;
  condition?: ModelFollowRelationshipConditionInput | null;
};

export type DeleteFollowRelationshipMutation = {
  deleteFollowRelationship?: {
    __typename: 'FollowRelationship';
    followeeId: string;
    followerId: string;
    id: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type CreatePostTagsMutationVariables = {
  input: CreatePostTagsInput;
  condition?: ModelPostTagsConditionInput | null;
};

export type CreatePostTagsMutation = {
  createPostTags?: {
    __typename: 'PostTags';
    id: string;
    postID: string;
    tagID: string;
    post: {
      __typename: 'Post';
      id: string;
      cafeId: string;
      cafeName: string;
      content?: string | null;
      picture: string;
      tags?: {
        __typename: 'ModelPostTagsConnection';
        nextToken?: string | null;
      } | null;
      comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    tag: {
      __typename: 'Tag';
      id: string;
      label: string;
      posts?: {
        __typename: 'ModelPostTagsConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type UpdatePostTagsMutationVariables = {
  input: UpdatePostTagsInput;
  condition?: ModelPostTagsConditionInput | null;
};

export type UpdatePostTagsMutation = {
  updatePostTags?: {
    __typename: 'PostTags';
    id: string;
    postID: string;
    tagID: string;
    post: {
      __typename: 'Post';
      id: string;
      cafeId: string;
      cafeName: string;
      content?: string | null;
      picture: string;
      tags?: {
        __typename: 'ModelPostTagsConnection';
        nextToken?: string | null;
      } | null;
      comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    tag: {
      __typename: 'Tag';
      id: string;
      label: string;
      posts?: {
        __typename: 'ModelPostTagsConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type DeletePostTagsMutationVariables = {
  input: DeletePostTagsInput;
  condition?: ModelPostTagsConditionInput | null;
};

export type DeletePostTagsMutation = {
  deletePostTags?: {
    __typename: 'PostTags';
    id: string;
    postID: string;
    tagID: string;
    post: {
      __typename: 'Post';
      id: string;
      cafeId: string;
      cafeName: string;
      content?: string | null;
      picture: string;
      tags?: {
        __typename: 'ModelPostTagsConnection';
        nextToken?: string | null;
      } | null;
      comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    tag: {
      __typename: 'Tag';
      id: string;
      label: string;
      posts?: {
        __typename: 'ModelPostTagsConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type GetFollowRelationshipQueryVariables = {
  id: string;
};

export type GetFollowRelationshipQuery = {
  getFollowRelationship?: {
    __typename: 'FollowRelationship';
    followeeId: string;
    followerId: string;
    id: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type ListFollowRelationshipsQueryVariables = {
  filter?: ModelFollowRelationshipFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListFollowRelationshipsQuery = {
  listFollowRelationships?: {
    __typename: 'ModelFollowRelationshipConnection';
    items: Array<{
      __typename: 'FollowRelationship';
      followeeId: string;
      followerId: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    }>;
    nextToken?: string | null;
  } | null;
};

export type GetPostQueryVariables = {
  id: string;
};

export type GetPostQuery = {
  getPost?: {
    __typename: 'Post';
    id: string;
    cafeId: string;
    cafeName: string;
    content?: string | null;
    picture: string;
    tags?: {
      __typename: 'ModelPostTagsConnection';
      items: Array<{
        __typename: 'PostTags';
        id: string;
        postID: string;
        tagID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: 'ModelCommentConnection';
      items: Array<{
        __typename: 'Comment';
        id: string;
        postID: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListPostsQuery = {
  listPosts?: {
    __typename: 'ModelPostConnection';
    items: Array<{
      __typename: 'Post';
      id: string;
      cafeId: string;
      cafeName: string;
      content?: string | null;
      picture: string;
      tags?: {
        __typename: 'ModelPostTagsConnection';
        nextToken?: string | null;
      } | null;
      comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    }>;
    nextToken?: string | null;
  } | null;
};

export type GetTagQueryVariables = {
  id: string;
};

export type GetTagQuery = {
  getTag?: {
    __typename: 'Tag';
    id: string;
    label: string;
    posts?: {
      __typename: 'ModelPostTagsConnection';
      items: Array<{
        __typename: 'PostTags';
        id: string;
        postID: string;
        tagID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type ListTagsQueryVariables = {
  filter?: ModelTagFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListTagsQuery = {
  listTags?: {
    __typename: 'ModelTagConnection';
    items: Array<{
      __typename: 'Tag';
      id: string;
      label: string;
      posts?: {
        __typename: 'ModelPostTagsConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    }>;
    nextToken?: string | null;
  } | null;
};

export type GetCommentQueryVariables = {
  id: string;
};

export type GetCommentQuery = {
  getComment?: {
    __typename: 'Comment';
    id: string;
    postID: string;
    post?: {
      __typename: 'Post';
      id: string;
      cafeId: string;
      cafeName: string;
      content?: string | null;
      picture: string;
      tags?: {
        __typename: 'ModelPostTagsConnection';
        nextToken?: string | null;
      } | null;
      comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    content: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCommentsQuery = {
  listComments?: {
    __typename: 'ModelCommentConnection';
    items: Array<{
      __typename: 'Comment';
      id: string;
      postID: string;
      post?: {
        __typename: 'Post';
        id: string;
        cafeId: string;
        cafeName: string;
        content?: string | null;
        picture: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null;
      content: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    }>;
    nextToken?: string | null;
  } | null;
};

export type GetPostTagsQueryVariables = {
  id: string;
};

export type GetPostTagsQuery = {
  getPostTags?: {
    __typename: 'PostTags';
    id: string;
    postID: string;
    tagID: string;
    post: {
      __typename: 'Post';
      id: string;
      cafeId: string;
      cafeName: string;
      content?: string | null;
      picture: string;
      tags?: {
        __typename: 'ModelPostTagsConnection';
        nextToken?: string | null;
      } | null;
      comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    tag: {
      __typename: 'Tag';
      id: string;
      label: string;
      posts?: {
        __typename: 'ModelPostTagsConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type ListPostTagsQueryVariables = {
  filter?: ModelPostTagsFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListPostTagsQuery = {
  listPostTags?: {
    __typename: 'ModelPostTagsConnection';
    items: Array<{
      __typename: 'PostTags';
      id: string;
      postID: string;
      tagID: string;
      post: {
        __typename: 'Post';
        id: string;
        cafeId: string;
        cafeName: string;
        content?: string | null;
        picture: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      };
      tag: {
        __typename: 'Tag';
        id: string;
        label: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      };
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    }>;
    nextToken?: string | null;
  } | null;
};

export type OnCreateFollowRelationshipSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateFollowRelationshipSubscription = {
  onCreateFollowRelationship?: {
    __typename: 'FollowRelationship';
    followeeId: string;
    followerId: string;
    id: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnDeleteFollowRelationshipSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteFollowRelationshipSubscription = {
  onDeleteFollowRelationship?: {
    __typename: 'FollowRelationship';
    followeeId: string;
    followerId: string;
    id: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnCreatePostSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreatePostSubscription = {
  onCreatePost?: {
    __typename: 'Post';
    id: string;
    cafeId: string;
    cafeName: string;
    content?: string | null;
    picture: string;
    tags?: {
      __typename: 'ModelPostTagsConnection';
      items: Array<{
        __typename: 'PostTags';
        id: string;
        postID: string;
        tagID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: 'ModelCommentConnection';
      items: Array<{
        __typename: 'Comment';
        id: string;
        postID: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnUpdatePostSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdatePostSubscription = {
  onUpdatePost?: {
    __typename: 'Post';
    id: string;
    cafeId: string;
    cafeName: string;
    content?: string | null;
    picture: string;
    tags?: {
      __typename: 'ModelPostTagsConnection';
      items: Array<{
        __typename: 'PostTags';
        id: string;
        postID: string;
        tagID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: 'ModelCommentConnection';
      items: Array<{
        __typename: 'Comment';
        id: string;
        postID: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnDeletePostSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeletePostSubscription = {
  onDeletePost?: {
    __typename: 'Post';
    id: string;
    cafeId: string;
    cafeName: string;
    content?: string | null;
    picture: string;
    tags?: {
      __typename: 'ModelPostTagsConnection';
      items: Array<{
        __typename: 'PostTags';
        id: string;
        postID: string;
        tagID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: 'ModelCommentConnection';
      items: Array<{
        __typename: 'Comment';
        id: string;
        postID: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnCreateTagSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateTagSubscription = {
  onCreateTag?: {
    __typename: 'Tag';
    id: string;
    label: string;
    posts?: {
      __typename: 'ModelPostTagsConnection';
      items: Array<{
        __typename: 'PostTags';
        id: string;
        postID: string;
        tagID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnCreateCommentSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateCommentSubscription = {
  onCreateComment?: {
    __typename: 'Comment';
    id: string;
    postID: string;
    post?: {
      __typename: 'Post';
      id: string;
      cafeId: string;
      cafeName: string;
      content?: string | null;
      picture: string;
      tags?: {
        __typename: 'ModelPostTagsConnection';
        nextToken?: string | null;
      } | null;
      comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    content: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnUpdateCommentSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?: {
    __typename: 'Comment';
    id: string;
    postID: string;
    post?: {
      __typename: 'Post';
      id: string;
      cafeId: string;
      cafeName: string;
      content?: string | null;
      picture: string;
      tags?: {
        __typename: 'ModelPostTagsConnection';
        nextToken?: string | null;
      } | null;
      comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    content: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnDeleteCommentSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?: {
    __typename: 'Comment';
    id: string;
    postID: string;
    post?: {
      __typename: 'Post';
      id: string;
      cafeId: string;
      cafeName: string;
      content?: string | null;
      picture: string;
      tags?: {
        __typename: 'ModelPostTagsConnection';
        nextToken?: string | null;
      } | null;
      comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    content: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnCreatePostTagsSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreatePostTagsSubscription = {
  onCreatePostTags?: {
    __typename: 'PostTags';
    id: string;
    postID: string;
    tagID: string;
    post: {
      __typename: 'Post';
      id: string;
      cafeId: string;
      cafeName: string;
      content?: string | null;
      picture: string;
      tags?: {
        __typename: 'ModelPostTagsConnection';
        nextToken?: string | null;
      } | null;
      comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    tag: {
      __typename: 'Tag';
      id: string;
      label: string;
      posts?: {
        __typename: 'ModelPostTagsConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnUpdatePostTagsSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdatePostTagsSubscription = {
  onUpdatePostTags?: {
    __typename: 'PostTags';
    id: string;
    postID: string;
    tagID: string;
    post: {
      __typename: 'Post';
      id: string;
      cafeId: string;
      cafeName: string;
      content?: string | null;
      picture: string;
      tags?: {
        __typename: 'ModelPostTagsConnection';
        nextToken?: string | null;
      } | null;
      comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    tag: {
      __typename: 'Tag';
      id: string;
      label: string;
      posts?: {
        __typename: 'ModelPostTagsConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnDeletePostTagsSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeletePostTagsSubscription = {
  onDeletePostTags?: {
    __typename: 'PostTags';
    id: string;
    postID: string;
    tagID: string;
    post: {
      __typename: 'Post';
      id: string;
      cafeId: string;
      cafeName: string;
      content?: string | null;
      picture: string;
      tags?: {
        __typename: 'ModelPostTagsConnection';
        nextToken?: string | null;
      } | null;
      comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    tag: {
      __typename: 'Tag';
      id: string;
      label: string;
      posts?: {
        __typename: 'ModelPostTagsConnection';
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};
