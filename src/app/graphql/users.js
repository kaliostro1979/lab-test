import {gql} from "@apollo/client";

export const GET_ALL_USERS = gql`
   query {
    users {
        id
        name
        username
        email
  }
}
`

export const GET_USER = gql`
   query($id: Int!) {
    user(id: $id) {
        id
        username
        email
  }
}
`

/*
* planet($planetId: ID!) {
    planet(planetId: $planetId) {
      id
      name
    }
  }
* */
