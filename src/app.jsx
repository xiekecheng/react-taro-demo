// import { Component } from 'react'
import { Provider } from "mobx-react";
import { Component } from "react";
// import Taro from "@tarojs/components";
// "@tarojs/components"
import Taro from "@tarojs/taro";
// import 'taro-ui/dist/style/index.scss'
import "taro-ui/dist/style/index.scss"; // 引入组件样式 - 方式一
import "./app.scss";

import store from "./store";

// export default props => {
//   return (
//     <Provider {...store}>
//       {props.children}
//     </Provider>
//   )
// }

export default class App extends Component {
  onLaunch() {
    console.log("启动了");
    // 登录
    Taro.login({
      success: (res) => {
        // 先获取code
        if (res.code) {
          console.log("登录成功", res.code);
          // 处理登录
          Taro.request({
            url: "http://localhost:9999/api/v1/weapp/login", 
            data: {
              appid: "wxff7fe8a650e2f6c4",
              secret: "f1d73aac814c78e49fe3e2b1f7d395ce",
              js_code: res.code,
              grant_type: "authorization_code",
            },
            method: "Post",
            header: {
              "content-type": "application/json", // 默认值
            },
            success: function (result) {
              console.log("token", result.data.data);
              Taro.setStorageSync('token', result.data.data)
            },
          });
        }
      },
    });


    Taro.getLocation({
      type: 'wgs84',
      success: function (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        console.log('latitude',latitude);
      }
      })

    // Taro.getUserProfile({
    //   desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    //   success: (result) => {
    //     console.log('result.data',result.data)
    //   }
    // })
    // componentDidShow () {
    //   Taro.getUserProfile({
    //     desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    //     success: (result) => {
    //       console.log('result.data',result.data)
    //     }
    //   })
    // }
  }
  render() {
    return <Provider {...store}>{this.props.children}</Provider>;
  }
}
