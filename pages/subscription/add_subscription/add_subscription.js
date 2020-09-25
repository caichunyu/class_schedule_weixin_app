// pages/subscription/add_subscription/add_subscription.js
import {a} from "../../../assets/depend/arealist";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    subTypeResult: '不限',
    selectedCity: '北京市',
    areaList: {},
    subAreaPopup: false,
    subTypePopup: false,
  },

  onClose: function () {
    this.setData({
      subAreaPopup: false,
      subTypePopup: false,
    });
  },
  selectedCity(e) {
    console.log(e.detail.detail);
    this.setData({
      selectedCity: e.detail.detail.city
    });
    this.onClose();
  },
  subAreaPopup() {
    this.setData({
      subAreaPopup: true
    });
  },
  subTypePopup() {
    this.setData({
      subTypePopup: true
    });
  },
  subTypeResult(e) {
    console.log(e._relatedInfo.anchorTargetText, e);
    this.setData({
      subTypeResult: e._relatedInfo.anchorTargetText
    });
    this.onClose();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      areaList: a
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

  }
});
