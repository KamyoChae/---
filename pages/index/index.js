//index.js
//获取应用实例
const app = getApp()


Page({
  data: {
    motto: '乔巴的一千零一个鬼故事',
    userInfo: '../../images/logo.jpg',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

  },

  getEvent:function(e){
    // 获取绑定的id 修改用户点击类型
    app.myType = e.target.id

    app.getList() // 用于测试 显示发送请求的结果


  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
   


  },



})