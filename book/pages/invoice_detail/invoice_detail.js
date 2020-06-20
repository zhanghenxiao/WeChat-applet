// pages/invoice_detail/invoice_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputlist : []
  },
  bindKeyInput: function (e) {
    console.log(e)
    let  inputValue,putid
    var inputlist = []
    putid = e.currentTarget.dataset.putid
    inputValue= e.detail.value
    if (putid == 1) {
      this.setData({
        mind1 : inputValue
      })
    }
    if (putid == 2) {
      this.setData({
        mind2 : inputValue
      })
    }
    if (putid == 3) {
      this.setData({
        mind3 : inputValue
      })
    }
    if (putid == 4) {
      this.setData({
        mind4 : inputValue
      })
    }
  },
send : function(e){
      console.log(1)
      wx.request({
        url: "https://fapiao.market.alicloudapi.com/v2/invoice/query",
        method:'POST',
        data: {
          fpdm:'051001900111',
          fphm:'51096586',
          kprq:'20190608',
        },
        header: { 
          // Authorization:"APPCODE d86557f39f304530bd642da241c0104c",
          Authorization:'APPCODE d86557f39f304530bd642da241c0104c',
        },
        success: function (res) {
          console.log(res.data)
        },
        fail:function (res) {
          console.log("fail")
        },
      })
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

  }
})