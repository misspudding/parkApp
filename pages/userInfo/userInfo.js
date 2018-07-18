// pages/userInfo/userInfo.js
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

  openBindPhoneNumber: function() {
    wx.navigateTo({
      url: '../bindPhoneNumber/bindPhoneNumber',
    })
  },

  openWallet: function() {
    wx.navigateTo({
      url: '../myWallet/myWallet',
    })
  },

  openMoonCardManager: function() {
    wx.navigateTo({
      url: '../monthCard/monthCard',
    })
  },

  openCarManager: function() {
    wx.navigateTo({
      url: '../carManage/carManage',
    })
  },

  openParkingRecord: function() {
    wx.navigateTo({
      url: '../parkRecord/parkRecord',
    })

  },

  openInvoiceManager: function() {
    wx.navigateTo({
      url: '../invoice/invoice',
    })

  },

  openAboutUs: function() {
    wx.navigateTo({
      url: '../aboutUs/aboutUs',
    })
  }
})