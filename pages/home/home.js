// pages/personal/personal.js
const app = getApp();
let buttonList = [
  {
    label: '学生课表',
    icon: '../../assets/icon/menu_all.png',
    link: './courseLists/courseLists',
    enable: true,
    show: true
  },
  {
    label: '最新信息',
    icon: '../../assets/icon/menu_01.png',
    link: '',
    enable: true,
    show: true
  },
  {
    label: '敬请期待',
    icon: '',
    link: '',
    enable: true,
    show: true
  },
  {
    label: '敬请期待',
    icon: '',
    link: '',
    enable: true,
    show: true
  }
];
let adsImgUrls = [
  {
    src: '../../assets/ads/ads1.jpg'
  },
  {
    src: '../../assets/ads/ads2.jpg'
  },
  {
    src: '../../assets/ads/ads3.jpg'
  }
];
let tenderInfos = [
  {
    text: '【岗前培训】关于做好2019年高校教师岗前培训及教师资格认定考核报名工作的通知 根据省教育厅教师资格认定中心和高等学校师资培训中心通知要求， 2019年河北省高校教师岗前培训工作安排在9月至10月份进行。现将岗前培训及考核工作有关事项通知如下：',
    tags: [
      {
        text: '教师',
        color: '#2999e8'
      },
      {
        text: '认证',
        color: '#c89953'
      },
      {
        text: '岗前培训',
        color: '#4498e1'
      }
    ],
    date: '2019-07-01'
  },
  {
    text: '【暑期】我校举行2019年大学生暑期社会实践动员会暨出征仪式 6月28日下午，我校在五教报告厅举行2019年大学生暑期社会实践动员会暨出征仪式。校党委常委、副校长贾东水出席仪式并讲话。学校办公室、组织部、教务处、学工部、校团委、马克思主义学院等部门、单位负责人，各学院党委副书记、分团委书记、社会实践团队师生代表300余人参加仪式。',
    tags: [
      {
        text: '暑期',
        color: '#2999e8'
      },
      {
        text: '学生',
        color: '#c89953'
      },
      {
        text: '社会实践',
        color: '#4498e1'
      }
    ],
    date: '2019-06-29'
  },
  {
    text: '【临床医学】我校临床医学专业通过教育部专业认证  近日，教育部临床医学专业认证工作委员会公布了2018年认证院校的认证结论。经认证工作委员会审议和网上公示，我校临床医学通过专业认证，有效期5年，自2018年11月至2023年11月。临床医学专业认证是一种外部质量保证制度，其价值取向在于保证学校办学质量的提高和可持续发展。',
    tags: [
      {
        text: '专业',
        color: '#2999e8'
      },
      {
        text: '认证',
        color: '#c89953'
      },
      {
        text: '临床医学',
        color: '#4498e1'
      }
    ],
    date: '2019-06-27'
  }
];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //////////
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    //////////
    searchValue: '',
    clearSearchValueIconShow: false,
    messageNum: 1234,
    buttonList: [],
    adsImgUrls: adsImgUrls,
    tenderInfos: tenderInfos
  },

  toCoursePage() {
    // wx.swichTab()
    wx.navigateTo({
      url: './courseLists/courseLists'
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      buttonList: buttonList
    });

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
  },
  /////////////////////
  searchOnBlur: function () {
    this.setData({
      clearSearchValueIconShow: false
    });
  },
  searchOnFocus: function () {
    this.setData({
      clearSearchValueIconShow: true
    });
  },
  searchOnInput: function (e) {
    this.setData({
      searchValue: e.detail.value
    });
  },
  clearSearchButtonOnClick: function () {

    this.setData({
      searchValue: ''
    });
  },
});

