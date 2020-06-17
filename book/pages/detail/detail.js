// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  //通过生命周期得初始化得到id得传递  options.id，options能获取各种指定参数的取值
  onLoad: function (options) {
     //console.log(options.id)
     // this 是回调函数当前 this指针指向的是page对象也可说是指向 onLoad对象
     this.setData({
      // 定义内部得状态变量只能在 this.setdata中使用才有效果  ///重点项
      // （mid）是定义的内部状态变量可在wxml中使用，但是不能在js中使用如
      // (mid)内部状态变量是可在AppData 中查看的到，但不能直接在当前js中使用。。。。。，可在wxml中使用。。。////重点项
      // url: "https://liudongtushuguan.cn/v2/movie/subject/" + mid, 则会报个错 thirdScriptError /ReferenceError: mid is not defined
      mid: options.id
    })
    var that = this
    wx.request({
      url: "https://liudongtushuguan.cn/v2/movie/subject/" + options.id,
      header: {
        "content-type": "json"
      },
      success: function (res) {
        console.log(res)
        if(res.statusCode==200){
          // this.setData 这里指向的是request 这里的方法，会报错thirdScriptError 需在方法外部定义 var that = this
          that.setData({
            movie: res.data
          })

          wx.setNavigationBarTitle({
            title: res.data.rating.average + "分: " + res.data.title,
          })

          wx.hideNavigationBarLoading()
        }

      }

    })
    
    wx.showNavigationBarLoading()
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

  }
})