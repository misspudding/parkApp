// pages/parkingDetail/parkingDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parkDetail:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://yapi.demo.qunar.com/mock/13617/parkDetail',
      header: {
        'content-type': 'application/json'
      },
      success:function (res) {
        that.setData({
          parkDetail:res.data
        })
        console.log(res.data)
      }
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
  
  },

  /**
   * 去导航
   */
  goToNavigation:function (e) {
    var latitude = this.data.parkDetail.latitude;
    var longitude = this.data.parkDetail.longitude;
    var scale = this.data.parkDetail.scale;
    wx.openLocation({
      latitude: latitude,
      longitude: longitude,
      scale: scale
    })
  }
})