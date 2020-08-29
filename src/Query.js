import { gql } from "apollo-boost";

export const LOG_IN = gql`
  mutation requestSecret($email: String!) {
    requestSecret(email: $email)
  }
`;
export const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $name: String!
    $email: String!
    $firstName: String
    $lastName: String
  ) {
    createAccount(
      name: $name
      email: $email
      firstName: $firstName
      lastName: $lastName
    )
  }
`;
export const ME = gql`
  {
    me {
      name
    }
  }
`;
export const CONFIRM_SECRET = gql`
  mutation confirmSecret($email: String!, $secret: String!) {
    confirmSecret(email: $email, secret: $secret)
  }
`;

export const LOCAL_LOG_IN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;

export const FEED_QUERY = gql`
  {
    seeFeed {
      id
      location
      caption
      user {
        id
        avatar
        name
      }
      files {
        id
        url
      }
      likeConut
      isLiked
      comments {
        id
        text
        user {
          id
          name
        }
      }
      createdAt
    }
  }
`;
export const TOGGLE_LIKE = gql`
  mutation toggleLike($postId: String!) {
    toggleLike(postId: $postId)
  }
`;

export const SEARCH = gql`
  query search($term: String!) {
    searchPost(term: $term) {
      id
      files {
        url
      }
      commentCount
      likeConut
    }
    searchUser(term: $term) {
      id
      avatar
      name
      isFollowing
      itsSelf
    }
  }
`;

export const FOLLOW = gql`
  mutation follow($id: String!) {
    follow(id: $id)
  }
`;
export const UNFOLLOW = gql`
  mutation unfollow($id: String!) {
    unfollow(id: $id)
  }
`;

export const GET_USER = gql`
  query seeUser($name: String!) {
    seeUser(name: $name) {
      id
      avatar
      name
      email
      firstName
      lastName
      fullName
      bio
      isFollowing
      itsSelf
      followersCount
      followingCount
      postsCount
      posts {
        id
        files {
          id
          url
        }
        likeConut
        commentCount
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: String!, $text: String!) {
    addComment(postId: $postId, text: $text) {
      id
      text
      user {
        name
      }
    }
  }
`;
export const EDIT_USER = gql`
  mutation editUser(
    $name: String
    $email: String
    $firstName: String
    $lastName: String
  ) {
    editUser(
      name: $name
      email: $email
      firstName: $firstName
      lastName: $lastName
    ) {
      name
      email
      firstName
      lastName
    }
  }
`;
export const DETAIL_POST = gql`
  query seeFullPost($id: String!) {
    seeFullPost(id: $id) {
      id
      location
      user {
        avatar
        name
      }
      files {
        url
      }
      comments {
        id
        text
        user {
          avatar
          name
        }
      }
      likeConut
      createdAt
      isLiked
    }
  }
`;
