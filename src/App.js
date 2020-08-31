import React from 'react'
import {Navigation} from './navigation'
import store from './common/store'
import { Provider } from 'react-redux';

export const App = () => {
  return (
  <Provider store={store}>
    <Navigation/>
  </Provider>)
}