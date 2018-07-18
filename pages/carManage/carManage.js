// pages/carManage/carManage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenmodalput: true,
    items:[
      {
        id:0,
        hiddenmodalput: true,
        isChecked:true
      },
      {
        id:1,
        hiddenmodalput: true,
        isChecked:true
      },
      {
        id: 2,
        hiddenmodalput: true,
        isChecked: false
      },
      {
        id: 3,
        hiddenmodalput: true,
        isChecked: false
      },
      {
        id: 4,
        hiddenmodalput: true,
        isChecked: false
      },
    ]
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
  
  },

  showNoPasswordPayModal :function(event) {
    var checked = event.detail.value;
    console.log(event)
    var id = event.currentTarget.id
    wx.setStorageSync(id, this.data.items)
    if (checked){
      this.setData({
        hiddenmodalput: false
      })
    }
  },

  cancel: function(e) {
    var that = this;
    var data = wx.getStorageSync(0)
    console.log(e);
    this.setData({
      hiddenmodalput: true,
      data: data
    })
  },
  
  confirm: function() {
    var that = this;
    this.setData({
      hiddenmodalput: true
      //提交设置
    })
  },

  openSendMessage: function () {
    //这里是改变消息推送的回调--打开消息推送状态(数据库默认为关闭)
    console.log("openSendMessage:open")
  }
})