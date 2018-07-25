// pages/recharge/recharge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:0,
    postId: 0,
    items: [{
      index:0,
      src: '../../resource/images/wxzf.png',
      value: 'WECHAT',
      name: '微信支付'
    }, ],
    showPrices: [{
      index: 0,
      price: 10
    }, {
      index: 1,
      price: 20
    }, {
      index: 2,
      price: 30
    }, {
      index: 3,
      price: 50
    }, {
      index: 4,
      price: 80
    }, {
      index: 5,
      price: 100
    }, {
      index: 6,
      price: 150
    }, {
      index: 7,
      price: 200
    }],
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
   * 点击改变为选中状态
   */
  pitchUp: function(event) {
    var postId = event.currentTarget.dataset.postid;
    if (this.data.showPrices[postId].index === this.data.postId) {
      return;
    } else {
      this.setData({
        postId: postId
      })
    }
  },

  /**
   * 获取输入的值
   */
  inputValue: function(e) {
    var inputValue = e.detail.value;
    this.setData({
      inputValue: inputValue
    });
  },

  /**
   * 充值
   */
  recharge: function(e) {
    //获取输入的数值
    var inputValue = this.data.inputValue;
    var postId = this.data.postId;
    var showPrices = this.data.showPrices;
    var price = showPrices[postId].price;
    var inputValue = this.data.inputValue;
    //console.log(inputValue);
    //判断输入的是否为空
    if (inputValue === 0 || inputValue === null || inputValue === "") {
      //console.log(inputValue);
      console.log("inner value null");
      console.log(price);
      //获取选中的金额做回调
    } else {
      console.log("inner value not null");
      //获取输入框数值做回调
      console.log(parseInt(inputValue));
    }
  }
})