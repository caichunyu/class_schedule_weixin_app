// pages/personal/personal.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userType: '普通用户',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  toCoupon() {
    wx.navigateTo({
      url: './coupon/coupon'
    });
  },
  toOrder() {
    wx.navigateTo({
      url: './order/order'
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //如果有本地userInfo就取出来用，没有的话如果全局有就用，如果全局也灭有，就登陆
    if (wx.getStorageSync('userInfo')) {
      let userInfo = wx.getStorageSync('userInfo');
      this.setData({
        userInfo: userInfo,
        hasUserInfo: true
      });
    } else {
      if (app.globalData.userInfo) {
        console.log('have userinfo found!', app.globalData);
        this.setData({
          userInfo: app.globalData.userInfo,
          hasUserInfo: true
        });
      } else {
        this.setData({
          hasUserInfo: false
        });
        console.log('no userinfo found!');
      }
    }
  },

  toEditPage: function () {
    console.log('clickMe test text bindtap');
    wx.navigateTo({
      url: 'edit/edit'
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getUserInfo: function (e) {
    console.log(e);
    try {
      wx.setStorageSync('userInfo', e.detail.userInfo);
    } catch (e) {
      console.log('personal setStorage err', e);
    }

    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  }
});
