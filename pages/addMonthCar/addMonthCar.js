
var interval = null //倒计时函数
Page({
  data: {
    casArray: ['湛江停车场', '霞山停车场', '开发停车场', '南油停车场', '坡头停车场'],
    reply: true,
    displaySty:'block',
    casIndex: 0,
    num: 0,
    fun_id: 2,
    time: '获取验证码', //倒计时 
    currentTime: 61
  },
  bindCasPickerChange: function (e) {
    this.setData({
      casIndex: e.detail.value,
      num: 1,
      displaySty:'none',
    })
  },
  hiddenFun: function (e) {
    this.setData({ reply: false });
    bindCasPickerChange
  },



  getCode: function (options) {
    var that = this;
    var currentTime = that.data.currentTime
    interval = setInterval(function () {
      currentTime--;
      that.setData({
        time: currentTime + '秒'
      })
      if (currentTime <= 0) {
        clearInterval(interval)
        that.setData({
          time: '重新发送',
          currentTime: 61,
          disabled: false
        })
      }
    }, 1000)
  },
  getVerificationCode() {
    this.getCode();
    var that = this
    that.setData({
      disabled: true
    })
  },
})
