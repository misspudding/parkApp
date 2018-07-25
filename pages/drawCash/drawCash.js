
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { src: '../../resource/images/union-pay.png', value: 'UNIONPAY', name: '银行卡' },
      { src: '../../resource/images/wxzf.png', value: 'WECHAT', name: '微信' },
    ],
    showPrices: [{ index: 0, price: 10 }, { index: 1, price: 20 }, { index: 2, price: 30 }, { index: 3, price: 50 }, { index: 4, price: 80 }, { index: 5, price: 100 }, { index: 6, price: 150 }, { index: 7, price: 200 }],
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
   * 点击改变为选中状态
   */
  pitchUp: function (event) {
    console.log(event);
    var postId = event.currentTarget.dataset.postid;
    console.log(postId);
    var that = this;
    if (this.data.showPrices[postId].index === postId) {
      console.log()
      return;
    } else {
      that.setData({
        postId: postId
      })
    }
  },
  openDrawCashPassWord:function(){
    wx.navigateTo({
      url: '../drawCashPassWord/drawCashPassWord',
    })
  }
})