/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFollowRelationship = /* GraphQL */ `
  subscription OnCreateFollowRelationship($owner: String) {
    onCreateFollowRelationship(owner: $owner) {
      followeeId
      followerId
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteFollowRelationship = /* GraphQL */ `
  subscription OnDeleteFollowRelationship($owner: String) {
    onDeleteFollowRelationship(owner: $owner) {
      followeeId
      followerId
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
      id
      type
      cafeId
      cafeName
      content
      picture
      createdAt
      updatedAt
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
      owner
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
      id
      type
      cafeId
      cafeName
      content
      picture
      createdAt
      updatedAt
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
      owner
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
      id
      type
      cafeId
      cafeName
      content
      picture
      createdAt
      updatedAt
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
      owner
    }
  }
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($owner: String) {
    onCreateTag(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
      id
      postID
      post {
        id
        type
        cafeId
        cafeName
        content
        picture
        createdAt
        updatedAt
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        owner
      }
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
      id
      postID
      post {
        id
        type
        cafeId
        cafeName
        content
        picture
        createdAt
        updatedAt
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        owner
      }
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
      id
      postID
      post {
        id
        type
        cafeId
        cafeName
        content
        picture
        createdAt
        updatedAt
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        owner
      }
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreatePostTags = /* GraphQL */ `
  subscription OnCreatePostTags($owner: String) {
    onCreatePostTags(owner: $owner) {
      id
      postID
      tagID
      post {
        id
        type
        cafeId
        cafeName
        content
        picture
        createdAt
        updatedAt
        tags {
          nextToken
        }
        comments {
          nextToken
        }
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
export const onUpdatePostTags = /* GraphQL */ `
  subscription OnUpdatePostTags($owner: String) {
    onUpdatePostTags(owner: $owner) {
      id
      postID
      tagID
      post {
        id
        type
        cafeId
        cafeName
        content
        picture
        createdAt
        updatedAt
        tags {
          nextToken
        }
        comments {
          nextToken
        }
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
export const onDeletePostTags = /* GraphQL */ `
  subscription OnDeletePostTags($owner: String) {
    onDeletePostTags(owner: $owner) {
      id
      postID
      tagID
      post {
        id
        type
        cafeId
        cafeName
        content
        picture
        createdAt
        updatedAt
        tags {
          nextToken
        }
        comments {
          nextToken
        }
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
