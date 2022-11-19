import {gql} from "@apollo/client";

export const GET_ALL_POSTS = gql`
   query {
    posts {
        id
        userId
        title
        body
  }
}
`

export const GET_POSTS_BY_USERID = gql`
   query($userId: Int!) {
    posts(userId: $userId) {
        id
        userId
        title
        body
  }
}
`
