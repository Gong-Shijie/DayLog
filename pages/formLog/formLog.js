Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrl:"cloud://gongshijie-2d87t.676f-gongshijie-2d87t-1301785064/c.jpg",
    loading:false,
    submit:true

  },

  tapLog:function(){
   
    this.hello = "hello"
    console.log("点击事件捕获"+this.hello)  

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
    setTimeout(() => {
      this.setData({
        loading:true
      })
    }, 1000);
    
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
countryChange:function(e){
this.setData({
  country:e.detail.value
})
},

dateChange:function(e){
  this.setData({
    date:e.detail.value
  })
  },

 timeChange:function(e){
    this.setData({
      time:e.detail.value
    })
    },
    submitForm:function(e){
      this.setData({
        submit:false
      }),
      setTimeout(() => {
        this.setData({
          submit:true
        })
        wx.showToast({
          title: '已提交',
        })
      }, 800);
    },
    resetForm:function(e){
      this.setData({
        country:0,
        date: "2020-03-31",
        time :'09:00',
        
      }),
      wx.showToast({
        title: '已重置',
      })
    },


  upload(){
    let that = this;
    console.log("点击了上传按钮")
    wx.chooseImage({
      count:1,
      sizeType:['original','compressed'],
      sourceType:['album','camera'],
      success: res => {
        that.uploadImage(res.tempFilePaths[0]);
      }
    });
  }



})