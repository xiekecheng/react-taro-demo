/*
 * @Author: your name
 * @Date: 2021-08-20 20:44:22
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-20 21:22:53
 * @FilePath: /react-taro-demo/src/store/modules/study.js
 */
import { observable, action } from 'mobx'

// mobx v4/v5 的写法
// ES6写法
class Study {
  @observable counter = 0
  @action counterStore(payload) {
    this.counter += payload
  }
  @action increment(payload) {
    this.counter += payload
  }
  @action decrement(payload) {
    this.counter += payload
  }
  @action incrementAsync(payload) {
    setTimeout(() => {
      this.counter += payload
    }, 1000)
  }
}
export default new Study()

// ES5写法
// export default observable({
//   counter: 0,
//   counterStore(payload) {
//     this.counter += payload
//   },
//   increment(payload) {
//     this.counter += payload
//   },
//   decrement(payload) {
//     this.counter += payload
//   },
//   incrementAsync(payload) {
//     setTimeout(() => {
//       this.counter += payload
//     }, 1000)
//   }
// })
