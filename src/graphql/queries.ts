/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFollowRelationship = /* GraphQL */ `
  query GetFollowRelationship($id: ID!) {
    getFollowRelationship(id: $id) {
      followeeId
      followerId
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listFollowRelationships = /* GraphQL */ `
  query ListFollowRelationships(
    $filter: ModelFollowRelationshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowRelationships(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        followeeId
        followerId
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const postsByDate = /* GraphQL */ `
  query PostsByDate(
    $type: String
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByDate(
      type: $type
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
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
export const listTags = /* GraphQL */ `
  query ListTags($filter: ModelTagFilterInput, $limit: Int, $nextToken: String) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          owner
        }
        content
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPostTags = /* GraphQL */ `
  query GetPostTags($id: ID!) {
    getPostTags(id: $id) {
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
export const listPostTags = /* GraphQL */ `
  query ListPostTags($filter: ModelPostTagsFilterInput, $limit: Int, $nextToken: String) {
    listPostTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          owner
        }
        tag {
          id
          label
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
