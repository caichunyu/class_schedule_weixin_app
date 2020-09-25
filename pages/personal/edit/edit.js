// pages/personal/edit/edit.js
import {a} from "../../../assets/depend/arealist";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender: '男',
    userAge: '',
    areaList: {},
    nickName: '鐔雨',
    userInfo: {},
    showNickname: false,
    nickNameSelf: '',
    genderPopup: '',
    agePopup: '',
    areaPopup: '',
    currentDate: new Date().getTime(),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.setStorageSync('coursesListFirst', b);

    //yiqian///////////////////////
    this.setData({
      areaList: a
    });
    if (wx.getStorageSync('userInfo')) {
      let userInfo = wx.getStorageSync('userInfo');
      this.setData({
        userInfo: userInfo,
      });
      console.log(this.userInfo, userInfo, 'getStorageSync');
    } else {
      console.log('localstorage have not it');
    }
    if (wx.getStorageSync('nickNameSelf')) {
      let nickNameSelf = wx.getStorageSync('nickNameSelf');
      console.log(nickNameSelf, 'nickNameSelf');
      console.log(this.userInfo, nickNameSelf, 'nickNameSelf');
      this.nickName = nickNameSelf;
      this.setData({
        nickName: nickNameSelf,
      });
      // console.log(userInfo)
    } else {
      // this.set({
      //   nickNameSelf: userInfo.nickName
      // });
      console.log('localstorage have not nickNameSelf');
    }
  },

  ageOnselect(event) {
    // console.log(event);
    let date = new Date(event.detail); //获取一个时间对象

    this.ageyear = date.getFullYear().toLocaleString() + '/';
    this.ageMonth = (date.getMonth() + 1).toString() + '/';
    this.ageDate = date.getDate().toLocaleString();
    let userAge = this.ageyear + this.ageMonth + this.ageDate;
    console.log(event.detail, userAge);
    wx.setStorageSync('userAge', userAge);
    this.onClose();
    this.setData({
      userAge: userAge
    });
  },
  chooseCity(e) {
    let city1 = e.detail.values[0].name.toLocaleString();
    let city2 = e.detail.values[1].name.toLocaleString();
    let location = city1 + city2;
    console.log(e.detail.values, location);
    wx.setStorageSync('location', location);
    this.onClose();
    this.setData({
      // areaPopup: false,
      location: location
    });
  },
  Gender0(e) {
    console.log(e);
    if (e._relatedInfo.anchorTargetText === '男生')
      console.log('Gender0 男生');
    this.setData({
      gender: '男生'
    });
    wx.setStorageSync('gender', '男生');
    this.onClose();
  },
  Gender1(e) {
    console.log(e);
    if (e._relatedInfo.anchorTargetText === '女生')
      console.log('Gender1 生');
    wx.setStorageSync('gender', '女生');
    this.setData({
      // areaPopup: false,
      gender: '女生'
    });
    this.onClose();
  },
  //以下为popup
  genderPopup() {
    this.setData({
      genderPopup: true
    });
  },
  agePopup() {
    this.setData({
      agePopup: true
    });
  },
  areaPopup() {
    this.setData({
      areaPopup: true
    });
  },
  onClose() {
    this.setData({
      // showNickname: false,
      genderPopup: false,
      agePopup: false,
      areaPopup: false,
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
    if (wx.getStorageSync('gender')) {
      this.setData({
        // areaPopup: false,
        gender: wx.getStorageSync('gender')
      });
      // this.lastGender = wx.getStorageSync('gender');
    }

    if (wx.getStorageSync('userAge')) {

      this.setData({
        // areaPopup: false,
        userAge: wx.getStorageSync('userAge').toLocaleString()
      });
    }

    if (wx.getStorageSync('location')) {
      this.setData({
        // areaPopup: false,
        location: wx.getStorageSync('location')
      });
    }
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
