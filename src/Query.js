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

export const SEARCH = gql`
  query search($term: String!) {
    searchPost(term: $term) {
      files {
        url
      }
      commentCount
      likeConut
    }
    searchUser(term: $term) {
      avatar
      name
      isFollowing
      itsSelf
    }
  }
`;
