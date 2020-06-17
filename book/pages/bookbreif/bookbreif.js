// pages/bookbreif/bookbreif.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    this.setData({
      mid: options.id
    })
    var that = this
    wx.request({
      url: "https://api.zhuishushenqi.com/book/" + options.id,
      header: {
        "content-type": "json"
      },
      success : function(res){
        console.log(res.data)
        let path
        // 访问500...
        // path = "statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2292476%2F2292476_06a4e067b75f41f69c08da045838f96f.jpg"
        that.setData({
          test : res.data,
          book_image : path,
          book_title : res.data.title,
          book_author : res.data.author,
          book_longIntro : res.data.longIntro
        })
        
      },
      fail(){
        console.log('fail =============')
      }
      
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onshow")
    wx.request({
      url: '',
    })
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