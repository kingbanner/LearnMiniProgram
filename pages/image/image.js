// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    upload_image_path:""
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

  },
  handleChooseAlbum: function(){
    //系统 API，让用户选择图片
    wx.chooseImage({
      //complete: (res) => {},
      /*要想动态设置这个值，必须要使用es6的表达形式 => */
      success: (res) => {
        console.log(res),
       // const path=res.tempFilePaths[0],
        this.setData({
          upload_image_path:res.tempFilePaths
        })
       // this.upload_image_path=res.tempFilePaths
      }
    })
  },
  handleImageLoad(){
    console.log('图片加载完成')

  }
})