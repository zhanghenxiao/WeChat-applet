// pages/week/week.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 选择初始化幻灯片页面
    index:"",
    status : true,
    sum : 1,
    test : 3,
    list_title:["最受关注图书榜","图书资讯","电子图书"],
    allbook:[
      {
        "bookname":"众多未来",
        "bookimage":"../images/week1.png",
        "book_detail":"作者: [美]乔丽·格雷厄姆（Jorie Graham)",
        "booke_content":"内容简介 普利策诗歌奖得主、战后美国诗坛中心性的诗人四十年间代表作首度在中文结集出版，实力青年译者金雯倾力翻译并导读。☆ 被约翰·阿什贝利称赞的后辈，被娜塔莉·波特曼称为“聪明又性感”的文学导师。☆ 继承艾略特、毕肖普诗学技艺，兼具智性与抒情的诗人。以精密的观察重新挖 掘微小平凡之物，探索人类情感和思维的边界，见证当代美国诗风与社会半个世纪的变迁。",
        "show":true,
        "id":100
      },
      {
        "bookname":"无辜者",
        "bookimage":"../images/week_book2.png",
        "book_detail":"作者: [意] 加布里埃莱·邓南遮",
        "show":true,
        "id":101
      }, 
      {
        "bookname":"别想生活有答案",
        "bookimage":"../images/week_book3.png",
        "book_detail":"作者: [德] 约尔格·贝尔纳迪 / 琳达·韦尔费尔",
        "show":false,
        "id":1291841
      },
    ],
  },
  click:function(event){
    this.setData({
      index : this.data.allbook.length - 1 ,
    })
  },
testclick:function(event){
  console.log(event)
},
// 在view中设置自定义数据  通过事件点击 传递数据至event中 通过event对象获取需要的值
// 被点击得书籍页如何传递至detail页  ?id=' + bookid通过javascript解析传递，会被解析成options对象
to_betail:function(event){ 
  console.log(event)
  var bookid = event.currentTarget.dataset.moveid
  console.log(bookid)
  wx.navigateTo({
    url: '../detail/detail?id=' + bookid
  })
},



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      index : this.data.allbook.length - 1 ,
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