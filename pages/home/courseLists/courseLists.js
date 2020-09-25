import Toast from '../../../miniprogram_npm/vant-weapp/toast/toast';

const citys = {
  '软件1601': ['2016-2017-1-1', '2016-2017-2-1', '2017-2018-1-1', '2017-2018-2-1', '2018-2019-1-1', '2018-2019-2-1'],
  '计算机1601': ['2016-2017-1-1', '2016-2017-2-1', '2017-2018-1-1', '2017-2018-2-1', '2018-2019-1-1', '2018-2019-2-1'],
  '通信1601': ['2016-2017-1-1', '2016-2017-2-1', '2017-2018-1-1', '2017-2018-2-1', '2018-2019-1-1', '2018-2019-2-1'],
  '物联1601': ['2016-2017-1-1', '2016-2017-2-1', '2017-2018-1-1', '2017-2018-2-1', '2018-2019-1-1', '2018-2019-2-1'],
  '信息1601': ['2016-2017-1-1', '2016-2017-2-1', '2017-2018-1-1', '2017-2018-2-1', '2018-2019-1-1', '2018-2019-2-1'],
  '自动化1601': ['2016-2017-1-1', '2016-2017-2-1', '2017-2018-1-1', '2017-2018-2-1', '2018-2019-1-1', '2018-2019-2-1'],
  '测控1601': ['2016-2017-1-1', '2016-2017-2-1', '2017-2018-1-1', '2017-2018-2-1', '2018-2019-1-1', '2018-2019-2-1'],
  '成型1601': ['2016-2017-1-1', '2016-2017-2-1', '2017-2018-1-1', '2017-2018-2-1', '2018-2019-1-1', '2018-2019-2-1'],
  '电气1601': ['2016-2017-1-1', '2016-2017-2-1', '2017-2018-1-1', '2017-2018-2-1', '2018-2019-1-1', '2018-2019-2-1'],
  '焊接1601': ['2016-2017-1-1', '2016-2017-2-1', '2017-2018-1-1', '2017-2018-2-1', '2018-2019-1-1', '2018-2019-2-1'],
  '机电1602': ['2016-2017-1-1', '2016-2017-2-1', '2017-2018-1-1', '2017-2018-2-1', '2018-2019-1-1', '2018-2019-2-1'],
  '机工1601': ['2016-2017-1-1', '2016-2017-2-1', '2017-2018-1-1', '2017-2018-2-1', '2018-2019-1-1', '2018-2019-2-1'],
};
Page({
  data: {
    columns: [
      {
        values: Object.keys(citys),
        className: 'column1'
      },
      {
        values: citys['软件1601'],
        className: 'column2',
        defaultIndex: 2
      }
    ],
    selectPopup: '',
    b: [],
    /////////////
    array1: [[['2', '1', ''], ['12', '21']], [['2', '2'], ['22', '22']], [['3', '3'], ['33', '33']]],//让第一项出来三个，一个空，
    array: ['第1周', '第2周', '第3周', '第4周', '第5周', '第6周', '第7周', '第8周', '第9周', '第10周',
      '第11周', '第12周', '第13周', '第14周', '第15周', '第16周', '第17周', '第18周', '第19周', '第20周',],
    index: 0,
    orgaData: {},
    coursesLists: [],
    show: false
  },

  onConfirm(event) {
    // const {picker, value, index} = event.detail;
    // picker.setColumnValues(1, citys[value[0]]);
    console.log(event.detail.value, '1');
    this.semester = event.detail.value[1];
    this.class = event.detail.value[0];
    console.log(this.class, this.semester);
    wx.setStorageSync('chooseClass', true);
    wx.setStorageSync('class', this.class);
    wx.setStorageSync('semester', this.semester);
    wx.setStorageSync('addCourse',[]);

    this.getCourseLists(this.class, this.semester);
    this.setData({selectPopup: false});
  },
  oncancel() {
    this.setData({selectPopup: false});
  },
  selectThePopup() {
    this.setData({
      selectPopup: true
    });
  },
  getCourseLists: function (classCode, planCode) {
    console.log(classCode, planCode);
    let that = this;
    wx.request({
      url: 'http://39.105.136.147/api/heu/schedule', // 仅为示例，并非真实的接口地址
      data: {
        // planCode: '2018-2019-2-1',
        planCode: planCode,
        classCode: classCode
      },
      // method: 'POST',
      header: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5dTIxIiwiYXV0aG9yaXRpZXMiOltdLCJpYXQiOjE1NjIxNjc5ODksImV4cCI6MTU2MjI1NDM4OX0.mcROXs7OpUAZT9W9fYpKdLzKAZJ-cPAxMMQf7hkEcGM',
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        let a = [];
        let b = [];

        for (let i = 0; i < res.data.data.length; i++) {
          a.push(res.data.data[i].scheduleInfo);
          for (let j = 0; j < res.data.data[i].scheduleInfo.length; j++) {
            b.push(res.data.data[i].scheduleInfo[j]);
            // console.log(b.length - 1, typeof b[b.length - 1], '>>');
            b[b.length - 1].courseName = res.data.data[i].subject.courseName;
            b[b.length - 1].inspectionType = res.data.data[i].subject.inspectionType;
            b[b.length - 1].teacherName = res.data.data[i].subject.teacherName;
            b[b.length - 1].teacherGender = res.data.data[i].subject.teacherGender;
          }
        }
        // wx.setStorageSync('coursesListFirst', b);

        that.wocao(b);
      },
    });
  },
  wocao(b) {
    // let b;
    // b = wx.getStorageSync('coursesListFirst');
    console.log(b, '从data里拿到的经过第一次处理的课程信息');

    let a;
    a = wx.getStorageSync('addCourse');
    let c;
    c = b.concat(wx.getStorageSync('addCourse'));
    // console.log(c, 'ccc<<');
    b = c;
    wx.setStorageSync('coursesListFirst', b);
    // console.log(b, '>>bbb');

    let weekList = [[{session: '1'}, {session: '4'}, {session: '6'}, {session: '8'}, {session: '10'}],
      [{session: '1'}, {session: '4'}, {session: '6'}, {session: '8'}, {session: '10'}],
      [{session: '1'}, {session: '4'}, {session: '6'}, {session: '8'}, {session: '10'}],
      [{session: '1'}, {session: '4'}, {session: '6'}, {session: '8'}, {session: '10'}],
      [{session: '1'}, {session: '4'}, {session: '6'}, {session: '8'}, {session: '10'}],
      [{session: '1'}, {session: '4'}, {session: '6'}, {session: '8'}, {session: '10'}],
      [{session: '1'}, {session: '4'}, {session: '6'}, {session: '8'}, {session: '10'}]];
    for (let i = 0; i < b.length; i++) {
      switch (b[i].week) {
        case '1':
          // console.log('111第几节', b[i].session, '什么课', b[i].courseName);
          switch (b[i].session) {
            case '1':
              weekList[0].splice(0, 1, b[i]);
              break;
            case '4':
              weekList[0].splice(1, 1, b[i]);
              break;
            case '6':
              weekList[0].splice(2, 1, b[i]);
              break;
            case '8':
              weekList[0].splice(3, 1, b[i]);
              break;
            case '10':
              weekList[0].splice(4, 1, b[i]);
              break;
          }
          break;

        case '2':
          // console.log('222第几节', b[i].session, '什么课', b[i].courseName);
          switch (b[i].session) {
            case '1':
              weekList[1].splice(0, 1, b[i]);
              break;
            case '4':
              weekList[1].splice(1, 1, b[i]);
              break;
            case '6':
              weekList[1].splice(2, 1, b[i]);
              break;
            case '8':
              weekList[1].splice(3, 1, b[i]);
              break;
            case '10':
              weekList[1].splice(4, 1, b[i]);
              break;
          }
          break;
        case '3':
          switch (b[i].session) {
            case '1':
              weekList[2].splice(0, 1, b[i]);
              break;
            case '4':
              weekList[2].splice(1, 1, b[i]);
              break;
            case '6':
              weekList[2].splice(2, 1, b[i]);
              break;
            case '8':
              weekList[2].splice(3, 1, b[i]);
              break;
            case '10':
              weekList[2].splice(4, 1, b[i]);
              break;
          }
          break;
        case '4':
          switch (b[i].session) {
            case '1':
              weekList[3].splice(0, 1, b[i]);
              break;
            case '4':
              weekList[3].splice(1, 1, b[i]);
              break;
            case '6':
              weekList[3].splice(2, 1, b[i]);
              break;
            case '8':
              weekList[3].splice(3, 1, b[i]);
              break;
            case '10':
              weekList[3].splice(4, 1, b[i]);
              break;
          }
          break;
        case '5':
          switch (b[i].session) {
            case '1':
              weekList[4].splice(0, 1, b[i]);
              break;
            case '4':
              weekList[4].splice(1, 1, b[i]);
              break;
            case '6':
              weekList[4].splice(2, 1, b[i]);
              break;
            case '8':
              weekList[4].splice(3, 1, b[i]);
              break;
            case '10':
              weekList[4].splice(4, 1, b[i]);
              break;
          }
          break;
        case '6':
          switch (b[i].session) {
            case '1':
              weekList[5].splice(0, 1, b[i]);
              break;
            case '4':
              weekList[5].splice(1, 1, b[i]);
              break;
            case '6':
              weekList[5].splice(2, 1, b[i]);
              break;
            case '8':
              weekList[5].splice(3, 1, b[i]);
              break;
            case '10':
              weekList[5].splice(4, 1, b[i]);
              break;
          }
          break;
        case '7':
          switch (b[i].session) {
            case '1':
              weekList[6].splice(0, 1, b[i]);
              break;
            case '4':
              weekList[6].splice(1, 1, b[i]);
              break;
            case '6':
              weekList[6].splice(2, 1, b[i]);
              break;
            case '8':
              weekList[6].splice(3, 1, b[i]);
              break;
            case '10':
              weekList[6].splice(4, 1, b[i]);
              break;
          }
          break;
      }
    }
    console.log(weekList, 'last list--');
    this.setData({
      coursesLists: weekList
    });
  },

  ///////////////////////////////////////////
  onClose() {
    this.setData({show: false});
  },
  onOpenPopup() {
    this.setData({show: true});
  },
  toAddCourse() {
    wx.navigateTo({
      url: './toAddCourse/toAddCourse'
    });
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    let coursesLists = wx.getStorageSync('data');
    console.log(coursesLists, e.detail.value, 'coursesLists, coursesLists');
    // if (coursesLists.)
    this.setData({
      index: e.detail.value,
    });
  },
  onLoad: function () {
  },

  onShow: function () {
    if (wx.getStorageSync('chooseClass') !== true) {
      this.setData({selectPopup: true});
    }
    let zhuanye = wx.getStorageSync('class');
    let xueqi = wx.getStorageSync('semester');
    this.getCourseLists(zhuanye, xueqi);
  },
  onHide: function () {
    // this.wocao();
  },
  //一打开页面就对本地的data进行处理，组织成最后的数据
});
