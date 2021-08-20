/*
 * @Author: your name
 * @Date: 2021-08-20 20:21:57
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-20 21:06:32
 * @FilePath: /react-taro-demo/src/store/index.js
 */
import study from './modules/study'

class Store {
  constructor() {
    this.study = study
  }
}

export default new Store()
