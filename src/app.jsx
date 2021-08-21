// import { Component } from 'react'
import { Provider } from 'mobx-react'
// import 'taro-ui/dist/style/index.scss'
import 'taro-ui/dist/style/index.scss' // 引入组件样式 - 方式一
import './app.scss'

import store from './store'

export default props => {
  return (
    <Provider {...store}>
      {props.children}
    </Provider>
  )
}