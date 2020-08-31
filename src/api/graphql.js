import { gql } from '@apollo/client'

export const getUsers = gql`
    query getUsers {
        getUsers{
          id
          name
          description
          username
          phone
          lastname
        }
      }
`;

export const createUser = gql`
    mutation createUser($user:UserInput) {
        createUser(input:$user){
          id
          name
          description
          username
          phone
          lastname
        }
      }
`;

export const updateUser = gql`
    mutation updateUser($user:UserInput,$id:Int) {
        updateUser(input:$user,id:$id){
          id
          name
          description
          username
          phone
          lastname
        }
      }
`;