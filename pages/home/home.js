// pages/home/home.js
Page({
  data:{name:'MuYu Young',
        age:18,
       students:[
          {id:110,name:'jordan',age:30},
          {id:111,name:'kobe',age:25},
          {id:112,name:'james',age:20},
          {id:113,name:'antony',age:22}
       ],
       counter:0
    },
    handleBtnClick() {
      //this.data.counter +=1
      //console.log(this.data.counter)
       this.setData({counter: this.data.counter+ 1})
        },
    handleSubtraction() {
        this.setData({counter: this.data.counter -1})
        }
  
})