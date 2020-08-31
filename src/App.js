import React from 'react'
import {Navigation} from './navigation'
import configureStore from './common/store'
import { Provider } from 'react-redux';


/*import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
const client = new ApolloClient({
  uri: 'http://localhost:4000/api',
  cache: new InMemoryCache()
})
client
    .query({
      query: gql`
        query getUser {
          getUser(id:1){
            id
            name
            description
          }
        }
        `
    })
    .then(result => console.log(result))
*/

const store = configureStore();

export const App = () => {
  return (
  <Provider store={store}>
    <Navigation/>
  </Provider>)
}