//注册一个小程序
App({
//生命周期函数
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log('小程序初始化完成！')
    wx.getUserInfo({
     // complete: (res) => {console.log(res)},
      success:function(res){
        console.log(res.userInfo.nickName)
      }
    }),
    setTimeout(function(){  //人为制造一个错误，并将
      const err =new Error()
      throw err
    },3000)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    //判断小程序的进入场景
    switch (options.scene) {
      case 1001:

        break;
      case 1002:
        
      break;
    
      default:
        break;
    }
    //获取用户信息并传递给服务器
    wx.getUserInfo({
      //complete: (res) => {},
      success:function(result){

      }
    })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('小程序被 关闭了')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
     console.log('有错误发生')
  },
  /*定义全局数据，可以所有页面共享*/
  globalData:{
    name:'kingbanner',
    age:40,
    mb:15895995279
  }
})
