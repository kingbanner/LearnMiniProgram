// pages/home/home.js
//getApp()可以获取App()产生的示例对象
const app=getApp()
//console.log(app.globalData.name)
//console.log(app.globalData.age)
//console.log(app.globalData.mb)
const name=app.globalData.name
const age = app.globalData.age
//注册一个页面
//每个页面都有自己 的生命周期，并绑定一些事件
Page({
   //初始化数据开始
  data:{name:'MuYu Young',
        age:18,
       students:[
          {id:110,name:'jordan',age:30},
          {id:111,name:'kobe',age:25},
          {id:112,name:'james',age:20},
          {id:113,name:'antony',age:22}
       ],
       counter:0,
       list:[]  //定义一个空数组
    },
    handleBtnClick() {
      //this.data.counter +=1
      //console.log(this.data.counter)
       this.setData({counter: this.data.counter+ 1})
        },
    handleSubtraction() {
        this.setData({counter: this.data.counter -1})
        },
   handleGetUserInfo(event){
      console.log(event)
   },
  /*1.监听页面的生命周期函数*/
  //页面被加载出来时
  onload(){
   console.log('页面被加载')
  },
  //页面被显示出来时
  onShow(){
     //发送一个http或https请求，并将返回的数据放入一个数组中。
   wx.request({
      url: 'https://apis.juhe.cn/mobile/get?phone=13156578228&key=7e02597a2242ff1faa6122dedb98b07c',
      success: (res) => {
       console.log(res.data.result),
       // const data2 = res.data.result,
        this.setData({ list:res.data.result})
      }
  })
},
  onHide(){

  },
  onUnload(){

  },
 // 页面被渲染出来时
  onReady(){

  },
  /*3.监听wxml中相关的事件*/


  /*4.监听其他事件*/
  onPageScroll(obj){
     console.log(obj)  },
  onReachBottom(){
     console.log('已到达页面底部')
  } ,
  onPullDownRefresh(){
     console.log('下拉刷新 ')
  }
})