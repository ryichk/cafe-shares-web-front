/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = /* GraphQL */ `
  mutation CreatePost($input: CreatePostInput!, $condition: ModelPostConditionInput) {
    createPost(input: $input, condition: $condition) {
      id
      cafeId
      cafeName
      content
      picture
      tags {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          postID
          content
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost($input: DeletePostInput!, $condition: ModelPostConditionInput) {
    deletePost(input: $input, condition: $condition) {
      id
      cafeId
      cafeName
      content
      picture
      tags {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          postID
          content
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost($input: UpdatePostInput!, $condition: ModelPostConditionInput) {
    updatePost(input: $input, condition: $condition) {
      id
      cafeId
      cafeName
      content
      picture
      tags {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          postID
          content
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag($input: CreateTagInput!, $condition: ModelTagConditionInput) {
    createTag(input: $input, condition: $condition) {
      id
      label
      posts {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment($input: CreateCommentInput!, $condition: ModelCommentConditionInput) {
    createComment(input: $input, condition: $condition) {
      id
      postID
      post {
        id
        cafeId
        cafeName
        content
        picture
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment($input: DeleteCommentInput!, $condition: ModelCommentConditionInput) {
    deleteComment(input: $input, condition: $condition) {
      id
      postID
      post {
        id
        cafeId
        cafeName
        content
        picture
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment($input: UpdateCommentInput!, $condition: ModelCommentConditionInput) {
    updateComment(input: $input, condition: $condition) {
      id
      postID
      post {
        id
        cafeId
        cafeName
        content
        picture
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createFollowRelationship = /* GraphQL */ `
  mutation CreateFollowRelationship(
    $input: CreateFollowRelationshipInput!
    $condition: ModelFollowRelationshipConditionInput
  ) {
    createFollowRelationship(input: $input, condition: $condition) {
      followeeId
      followerId
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteFollowRelationship = /* GraphQL */ `
  mutation DeleteFollowRelationship(
    $input: DeleteFollowRelationshipInput!
    $condition: ModelFollowRelationshipConditionInput
  ) {
    deleteFollowRelationship(input: $input, condition: $condition) {
      followeeId
      followerId
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPostTags = /* GraphQL */ `
  mutation CreatePostTags($input: CreatePostTagsInput!, $condition: ModelPostTagsConditionInput) {
    createPostTags(input: $input, condition: $condition) {
      id
      postID
      tagID
      post {
        id
        cafeId
        cafeName
        content
        picture
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      tag {
        id
        label
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePostTags = /* GraphQL */ `
  mutation UpdatePostTags($input: UpdatePostTagsInput!, $condition: ModelPostTagsConditionInput) {
    updatePostTags(input: $input, condition: $condition) {
      id
      postID
      tagID
      post {
        id
        cafeId
        cafeName
        content
        picture
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      tag {
        id
        label
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePostTags = /* GraphQL */ `
  mutation DeletePostTags($input: DeletePostTagsInput!, $condition: ModelPostTagsConditionInput) {
    deletePostTags(input: $input, condition: $condition) {
      id
      postID
      tagID
      post {
        id
        cafeId
        cafeName
        content
        picture
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      tag {
        id
        label
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
