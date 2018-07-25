// pages/drawCashPassWord/drawCashPassWord.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    eye: '../../resource/images/eye.png',
    kind: "password",
    toggle: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  //展示密码
  changePassWordType: function() {
    var that = this;
    var toggle = that.data.toggle;
    if (!toggle) {
      that.showPassWord();
    } else {
      that.closePassWord();
    }

  },
  showPassWord: function() {
    this.setData({
      kind: "text",
      eye:"../../resource/images/eye-close.png",
      toggle: true,
    });
  },
  closePassWord: function() {
    //console.log(this);
    this.setData({
      kind: "password",
      eye: "../../resource/images/eye.png",
      toggle: false,
    })
  },
  openChangePassWord:function(){
    wx.navigateTo({
      url: '../changePassWord/changePassWord',
    })
  },
  opendrawCashPassWordForget:function(){
    wx.navigateTo({
      url: '../drawCashPassWordForget/drawCashPassWordForget',
    })
  }
})