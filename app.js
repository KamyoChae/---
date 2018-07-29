<<<<<<< HEAD
//app.js
App({
  appid: '70308', // 你的appid
  sign: '3b0a0ac1a1ca4100abea1919d27c2662', // 你的密钥
  myType: "mj", 
  page: "1",
  post:[],
  flag : true,
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },


  
  getList: function () {
    // 获取故事列表 存入post数组
    var that = this 
    var doSuccessInit = this.doSuccessInit
    wx.request({

      url: 'https://route.showapi.com/955-1?showapi_res_gzip=0&&showapi_appid=' + that.appid + '&&showapi_sign=' + that.sign + '&&type=' + that.myType + '&&page=' + that.page, //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: doSuccessInit,
      fail:function(res){
        wx.showToast({
          title: '网络异常，请稍后...',
          icon: 'none',
          duration: 2000
        })
      }
    })

  },
  doSuccessInit: function (res) {
   
    if (res.data.showapi_res_body.pagebean) {
      if (this.flag){
        this.flag = false;
        let allpages = res.data.showapi_res_body.pagebean.allPages // 获取总页数
        
        this.page = Math.ceil(Math.random()*allpages) // 生成总页数之内的数组页
        console.log(this.page)
        this.getList() // 重新调用自身 因开关已改变 故不会进入此模块
      }else{
        this.flag = true; // 若第二次点击该按钮， 则再次生成随机值
        this.post = res.data.showapi_res_body.pagebean.contentlist

        console.log(res.data.showapi_res_body.pagebean)
        wx.navigateTo({
          // 跳转到内容页面
          url: '../content/content'
        })
      }
      
      
    } else {
      wx.showToast({
        title: '小傻瓜，这还没故事哦',
        icon: 'none',
        duration: 2000
      })
      console.log(res.data.showapi_res_body)
    }


  }

})

=======
//app.js
App({
  appid: '22222', // 你的appid
  sign: 'a01a013b42ca', // 你的密钥
  myType: "mj", 
  page: "1",
  post:[],
  flag : true,
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },


  
  getList: function () {
    // 获取故事列表 存入post数组
    var that = this 
    var doSuccessInit = this.doSuccessInit
    wx.request({

      url: 'https://route.showapi.com/955-1?showapi_res_gzip=0&&showapi_appid=' + that.appid + '&&showapi_sign=' + that.sign + '&&type=' + that.myType + '&&page=' + that.page, //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: doSuccessInit,
      fail:function(res){
        wx.showToast({
          title: '网络异常，请稍后...',
          icon: 'none',
          duration: 2000
        })
      }
    })

  },
  doSuccessInit: function (res) {
   
    if (res.data.showapi_res_body.pagebean) {
      if (this.flag){
        this.flag = false;
        let allpages = res.data.showapi_res_body.pagebean.allPages // 获取总页数
        
        this.page = Math.ceil(Math.random()*allpages) // 生成总页数之内的数组页
        console.log(this.page)
        this.getList() // 重新调用自身 因开关已改变 故不会进入此模块
      }else{
        this.flag = true; // 若第二次点击该按钮， 则再次生成随机值
        this.post = res.data.showapi_res_body.pagebean.contentlist

        console.log(res.data.showapi_res_body.pagebean)
        wx.navigateTo({
          // 跳转到内容页面
          url: '../content/content'
        })
      }
      
      
    } else {
      wx.showToast({
        title: '小傻瓜，这还没故事哦',
        icon: 'none',
        duration: 2000
      })
      console.log(res.data.showapi_res_body)
    }


  }

})

>>>>>>> 7e72c24dd740a162f4922eb470069ed278e340e6
