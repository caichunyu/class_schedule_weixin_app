// pages/personal/customerService/customerService.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addCourse: {
      courseName: '',
      teacherName: '',
      schoolyard: '',
      session: '1',
      atWeeks: '',
      week: '6'
    },

    courseTimeIndex: '0',
    courseTimeLists: ['上午第一大节', '上午第二大节', '下午第一大节', '下午第二大节', '晚上第一大节'],
    weekTimeIndex: '5',
    weekTimeLists: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
  },
  addPhoto(event) {
    console.log('eee', event);
  },
  addCourseName(e) {
    this.data.addCourse.courseName = e.detail;
    this.setData({
      addCourse: this.data.addCourse
    });
    // console.log(e, this.addCourse, 'addCourse.courseName');
  },
  addTeacherName(e) {
    this.data.addCourse.teacherName = e.detail;
    this.setData({
      addCourse: this.data.addCourse
    });
  },
  addCoursePlace(e) {
    this.data.addCourse.schoolyard = e.detail;
    this.setData({
      addCourse: this.data.addCourse
    });
  },
  upData() {
    console.log(this.data.addCourse, 'addCourse');
    wx.setStorageSync('addCourse', this.data.addCourse);
    wx.switchTab({
      url: '../../courseLists/courseLists'
    });
  },
  test() {
    console.log(this.data.addCourse, 'add test');
  },

  courseTimePicker: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    switch (e.detail.value) {
      case '0': {
        this.data.addCourse.session = '1';
        this.setData({
          addCourse: this.data.addCourse
        });
        // console.log(this.data.addCourse);
        break;
      }
      case '1': {
        this.data.addCourse.session = '4';
        this.setData({
          addCourse: this.data.addCourse,
          courseTimeIndex: '1'
        });
        break;
      }
      case '2': {
        this.data.addCourse.session = '6';
        this.setData({
          addCourse: this.data.addCourse,
          courseTimeIndex: '2'
        });
        // console.log(this.data.addCourse);
        break;
      }
      case '3': {
        this.data.addCourse.session = '8';
        this.setData({
          addCourse: this.data.addCourse,
          courseTimeIndex: '3'
        });
        // console.log(this.data.addCourse);
        break;
      }
      case '4': {
        this.data.addCourse.session = '10';
        this.setData({
          addCourse: this.data.addCourse,
          courseTimeIndex: '4'
        });
        // console.log(this.data.addCourse);
        break;
      }
    }
  },

  weekTimePicker: function (e) {
    console.log('week picker发送选择改变，携带值为', e.detail.value);
    switch (e.detail.value) {
      case '0': {
        this.data.addCourse.week = '1';
        this.setData({
          addCourse: this.data.addCourse
        });
        // console.log(this.data.addCourse);
        break;
      }
      case '1': {
        this.data.addCourse.week = '2';
        this.setData({
          addCourse: this.data.addCourse,
          weekTimeIndex: '1'
        });
        break;
      }
      case '2': {
        this.data.addCourse.week = '3';
        this.setData({
          addCourse: this.data.addCourse,
          weekTimeIndex: '2'
        });
        // console.log(this.data.addCourse);
        break;
      }
      case '3': {
        this.data.addCourse.week = '4';
        this.setData({
          addCourse: this.data.addCourse,
          weekTimeIndex: '3'
        });
        // console.log(this.data.addCourse);
        break;
      }
      case '4': {
        this.data.addCourse.week = '5';
        this.setData({
          addCourse: this.data.addCourse,
          weekTimeIndex: '4'
        });
        // console.log(this.data.addCourse);
        break;
      }
      case '5': {
        this.data.addCourse.week = '6';
        this.setData({
          addCourse: this.data.addCourse,
          weekTimeIndex: '5'
        });
        // console.log(this.data.addCourse);
        break;
      }
      case '6': {
        this.data.addCourse.week = '7';
        this.setData({
          addCourse: this.data.addCourse,
          weekTimeIndex: '6'
        });
        // console.log(this.data.addCourse);
        break;
      }
    }
  },

  addWeek: function (e) {
    this.data.addCourse.atWeeks = e.detail;
    this.setData({
      addCourse: this.data.addCourse,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
