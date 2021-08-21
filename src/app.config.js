/*
 * @Author: your name
 * @Date: 2021-08-20 20:21:57
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-21 17:06:51
 * @FilePath: /react-taro-demo/src/app.config.js
 */
export default {
  pages: [
    // 首页模块
    
    'pages/index/index',
    'pages/index/search/search',
    // 我的模块
    'pages/my/my',
    'pages/my/contract/contract',
    'pages/my/advise/advise',
    'pages/my/collect/collect',
    'pages/my/contact/contact',
    'pages/my/entrust/entrust',
    'pages/my/join/join',
    'pages/my/settings/settings',
    

    // 'pages/index/address/address',
    // 消息模块
    'pages/message/message',

  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'navigation',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    color:'#ADACAD',
    selectedColor:'#131212',
    backgroundColor:'#FFFFFF',
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
