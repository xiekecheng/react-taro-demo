import { Component } from 'react'
import { Provider } from 'mobx-react'
import './app.scss'

import store from './store'

export default props => {
  return (
    <Provider {...store}>
      {props.children}
    </Provider>
  )
}