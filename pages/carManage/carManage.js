// pages/carManage/carManage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenmodalput: true,
    isNotApproveColor: "#fe6133",
    cardList: [{
      postId: 0,
      licenseNumberFirst: '粤G',
      licenseNumberSecond: '88901',
      isApprove: false,//0为false,1为true
      isNoPasswordPay: false,
      isSendMessage: false
    }, {
      postId: 1,
      licenseNumberFirst: '粤G',
      licenseNumberSecond: '00001',
      isApprove: true,//0为false,1为true
      isNoPasswordPay: false,
      isSendMessage: false
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 免密支付的弹框二次输入密码确认
   */
  showNoPasswordPayModal: function(event) {
    var postId = event.currentTarget.dataset.postid;
    //console.log(postId);
    var isChecked = event.detail.value;
    var hiddenmodalput = false;
    //console.log(isChecked);
    if (!isChecked) {
      hiddenmodalput = true;
      //做回调请求-->改变免免密支付的转态
    }
    this.setData({
      hiddenmodalput: hiddenmodalput,
      postId: postId
    })
  },

  /**
  * 确定按钮的点击事件
  */
  confirm: function (e) {//这个要重新加载数据
    //键入的值
    var KeyInput = this.data.KeyInput;
    console.log(KeyInput);
    //发起校验请求
    this.setData({
      hiddenmodalput: true
    })
  },

  /**
   * 取消按钮的点击事件
   */
  cancel: function(e) {
    var postId = e.currentTarget.dataset.postid;
    var cardList = this.data.cardList;
    cardList[postId].isNoPasswordPay = false;
    this.setData({
         hiddenmodalput: true,
         cardList:cardList
    })
  },


  openSendMessage: function(e) {
    //这里是改变消息推送的回调--打开消息推送状态(数据库默认为关闭)
    var cardList = this.data.cardList;
    var postId = e.currentTarget.dataset.postid;
    var that= this;
    if (e.detail.value){
      wx.showModal({
        title: '提示',
        content: '是否打开消息推送?',
        cancelText: '否',
        confirmText: '是',
        success: function (res) {
          if (res.confirm) {//.这个要重新加载数据
            console.log('用户点击是' + res.confirm);
            //发起请求改变消息推送状态
          } else if (res.cancel) {
            cardList[postId].isSendMessage = false;
            that.setData({
              cardList: cardList
            })
            return;
          }
        }
      })
    }
  },

  /**
   * 移除车辆信息
   */
  removeCar: function(e) {
    var that = this;
    //获取车辆信息的id传回后台
    wx.showModal({
      title: '提示',
      content: '是否要删除该车辆信息?',
      cancelText: '否',
      confirmText: '是',
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击是' + res.confirm);
          //发起请求改变后台车牌状态
          //重载该页面
          that.onLoad();
        } else if (res.cancel) {
          //console.log('用户点击否' + res.cancel)
          return;
        }
      }
    })
  },

  /**
   * 未认证点击跳到认证页面
   */
  goToApprove: function (e) {
    var cardList = this.data.cardList;
    var postId = e.currentTarget.dataset.postid;
    if (cardList[postId].isApprove){
      //console.log("inner 已认证");
      return;
    }
    wx.navigateTo({
      url: '../carAuthentication/carAuthentication',
    })
  },

  /**
   * 获取输入的值
   */
  bindKeyInput: function(e) {
    //console.log(e.detail.value);
    this.setData({
      KeyInput: e.detail.value
    })
  }
})