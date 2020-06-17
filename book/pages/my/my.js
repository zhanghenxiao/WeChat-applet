// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
    console.log(e.detail.value)
  },

  request_test :function(){
    console.log(1)
    wx.request({
      // https://github.com/xiadd/zhuishushenqi
      // url: "https://goexpress.market.alicloudapi.com/", 
      // "https://shuapi.jiaston.com/book/115088/",
      url: "https://goexpress.market.alicloudapi.com/goexpress",
      data: {
        // no: '75360389285527',
        no: e.detail.value,
        // no: '780098068058',
        type: 'zto', 
      },
      header: { 
        Authorization:'APPCODE d86557f39f304530bd642da241c0104c',
        // "X-Ca-Timestamp":"1592028640296","gateway_channel":"http","X-Ca-Key":"203827181","x-ca-nonce":"7189b34a-d5d4-4aa6-9474-e54afa5b1bcd","X-Ca-Request-Mode":"DEBUG","X-Ca-Stage":"RELEASE"
        // 'content-type': 'application/json', // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },

 

  // request_test :function(){
  //   wx.request({
  //     url: 'url',
  //     success:function(res){
  //       console.log(res.data)
  //     },
  //   })
  // },



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

  }
})