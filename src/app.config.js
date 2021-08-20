/*
 * @Author: your name
 * @Date: 2021-08-20 20:21:57
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-21 01:27:19
 * @FilePath: /react-taro-demo/src/app.config.js
 */
export default {
  pages: [
    'pages/index/index',
    'pages/message/message',
    'pages/my/my'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '微信接口功能演示',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    color:'#A9A9A9',
    selectedColor:'#383838',
    backgroundColor:'#E2E2E2',
    borderStyle:'black',
    position:'bottom',
    list:[
      {
        text:'首页',
        pagePath:'pages/index/index',
        iconPath:'assets/img/home_notselect.png',
        selectedIconPath:'assets/img/home_selected.png'
      },
      {
        text:'消息',
        pagePath:'pages/message/message',
        iconPath:'assets/img/msg_notselect.png',
        selectedIconPath:'assets/img/msg_selected.png'
      },
      {
        text:'我的',
        pagePath:'pages/my/my',
        iconPath:'assets/img/my_notselect.png',
        selectedIconPath:'assets/img/my_selected.png'
      }
    ]
  },

}
