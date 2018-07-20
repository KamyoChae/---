//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    contentPage: null,
    contentType: null,
    contentList: [],
    img: null,
    title: null,
    desc: null,
    link: "",
    num: 0,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    this.getProterty()
  },
  getProterty: function() {
    this.contentPage = app.page
    this.contentType = app.myType
    this.contentList = app.post
    this.render(this.data.num)
  },
  render: function(index) {
    var that = this

    /*
    var img = this.data.img,
      desc = this.data.desc,
      title = this.data.title,
      link = this.data.link;

      */

    this.setData({
      img: that.contentList[index].img,
      desc: that.contentList[index].desc,
      title: that.contentList[index].title,
      link: 'https://www.guidaye.com' + that.contentList[index].link
    })
  },

  pickOther: function() {
    this.data.num++
      this.render(this.data.num)
    console.log(this.data.num)
    console.log(111)
    if (this.data.num == 8) {

      this.data.num = 0;
      app.getList()
      this.getProterty()
      console.log(this.img)
    }
  }


})