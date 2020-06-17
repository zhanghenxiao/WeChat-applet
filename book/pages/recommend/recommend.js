// pages/recommend/recommend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    booklist : ['热搜版','好评版','完结版'],
  },
  downpage :function(event){
    console.log(event)
    var bookid = event.currentTarget.dataset.bookid
    console.log(bookid)
    wx.navigateTo({
      url:'../bookbreif/bookbreif?id=' + bookid,
    })
  },

  // test:function(event){
  //   wx.request({
  //     url: 'https://api.zhuishushenqi.com/book/5ae182088ab51e366a5aa7e4',
  //     success:function(res){
  //       console.log(res)
  //     },
  //      fail:function(res){
  //        console.log("fail")
  //      } 
  //   })
  // },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    ww:222
    testiamge : 'statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2201994%2F2201994_8962ad94bda448ac84933ff1ae534ac4.jpg'
    this.setData({
      test:2
      // books : res.data.ranking.books
      // url: 'https://api.zhuishushenqi.com/ranking/5a6844f8fc84c2b8efaa8bc5'
    })
    var that = this
    wx.request({
      url: 'https://api.zhuishushenqi.com/ranking/5a6844f8fc84c2b8efaa8bc5',
      success:function(res){
        // console.log(res.data)
        let dataList = res.data.ranking.books; //获取到的数据
        // let js中定义局部声明变量
        let item_cover_length  
        let item_submit_time
        dataList.forEach((item) => {
          item_cover_length = item.cover.length
          // console.log(item_cover_length)
          item_submit_time = item.cover.substring(0, item_cover_length-3); //要截取字段的字符串
          // console.log(item_submit_time)
        })
        that.setData({
          books : res.data.ranking.books,
          image : item_submit_time
        })
      },
    })
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
    console.log('在底部了')
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
    return{
      title:"每周推荐"
    }
  }
})