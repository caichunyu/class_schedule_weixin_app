//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {}
  },
  onLoad: function() {
    wx.switchTab({
      url: '/pages/home/home',
    })
    // setTimeout(() => {
    //   wx.switchTab({
    //     url: '/pages/home/home',
    //   })
    // }, 500);
  }
})