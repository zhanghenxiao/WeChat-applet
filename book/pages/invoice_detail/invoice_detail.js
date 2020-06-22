// pages/invoice_detail/invoice_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputlist : [],
    fpdm:'051001900111',
    fphm:'51096586',
    kprq:"20190608",
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

json2Form:function(json) {
  var str = [];
  for (var p in json) {
  str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));
  }
  return str.join("&");
  },
//fpdm: "4400151320",
// fphm: "39915391",
// kprq: "20160301",
// checkCode: "853924",

//3700172320
//16885448
//20180626
//348364

//011001600111
//15540964
//20170613
//916908

//052001600111
//32176424
//20190212
//227590


send : function(){
wx.request({
    url: 'https://fapiao.market.alicloudapi.com/v2/invoice/query', 
    data: this.json2Form({ 
    fpdm: this.data.mind1,
    fphm: this.data.mind2,
    kprq: this.data.mind3,
    checkCode: this.data.mind4, //根据发票类型填对应的参数
  }),
  header: {
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    Authorization: "APPCODE d86557f39f304530bd642da241c0104c",
    // Host: "fapiao.market.alicloudapi.com",
  },
  success(res) {
    console.log(res.data)
    // console.log(1)
    wx.navigateTo({
      url:'../invoice_verify/invoice_verify?data='+ res.data
    })
  },
  method: "post",
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