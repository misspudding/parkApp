// pages/callAdmin/callAdmin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    admin: {
      parkName:"湛江市保利原景外围停车场",
      adminName:"张无忌",
      position:"值班管理员",
      phoneNum:"13822528774"
    }
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

  /**
   * 调打电话
   */
  makePhoneCall: function (event) {
    var phoneNumber = this.data.admin.phoneNum;
    wx.makePhoneCall({
      phoneNumber: phoneNumber,
    })
  }
})