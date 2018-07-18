var checkNetWork = require('../../utils/CheckNetWork.js');
Page({
  data: {
    isKeyboard: false, //是否显示键盘
    specialBtn: false,
    tapNum: false, //数字键盘是否可以点击
    parkingData: false, //是否展示剩余车位按钮
    isFocus: false, //输入框聚焦
    flag: false, //防止多次点击的阀门
    keyboardNumber: '1234567890',
    keyboardAlph: 'QWERTYUIOPASDFGHJKL巛ZXCVBNM',
    keyboard1: '京津沪冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤川青藏琼宁渝',
    keyboard2: '',
    keyboard2For: ['完成'],
    keyboardValue: '',
    textArr: [],
    textValue: '',
    warnMessage: '提示：请确保您填写车牌号的正确性，以免后续误交费给您造成不必要的麻烦。',
    telMessage: '该小程序目前仅适用于东北服务区停车场，给您造成的不便敬请谅解！'
  },

  onLoad: function(options) {
    var self = this;
    if (!checkNetWork.checkNetWorkStatu()) {
      console.log('网络错误');
      return false;
    } else {
      wx.request({
        url: '',
        data: {
          textValue: self.data.textValue
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res) {
          var response = res.data.data;
          self.setData({
            parkingData: response.parkingData,
            warnMessage: response.warnMessage,
            telMessage: response.telMessage,
            phoneNumber: response.phoneNumber,
            keyboard1: response.keyboard1
          });
          wx.setStorage({
            key: 'staticData',
            data: response
          });
        }
      });
    }
  },

  //生命周期函数--监听页面初次渲染完成
  onReady: function () {
    var self = this;
    //将keyboard1和keyboard2中的所有字符串拆分成一个一个字组成的数组
    self.data.keyboard1 = self.data.keyboard1.split('');
    self.data.keyboard2 = self.data.keyboard2.split('');
    self.setData({
      keyboardValue: self.data.keyboard1
    });
  },

  //生命周期函数--监听页面显示
  onShow: function () {
    var self = this;
    self.setData({
      flag: false
    });
  },

  //展示虚拟键盘
  showKeyboard: function() {
    var self = this;
    self.setData({
      isFocus: true,
      isKeyboard: true
    });
  },

  //隐藏虚拟键盘
  hideKeyboard: function() {
    var self = this;
    if (self.data.isKeyboard) {
      //说明键盘是显示的，再次点击要隐藏键盘
      if (self.data.textValue) {
        self.setData({
          isKeyboard: false
        });
      } else {
        self.setData({
          isKeyboard: false,
          isFocus: false
        });
      }
    }
  },

  //输入框聚焦触发，显示键盘
  bindFocus: function () {
    var self = this;
    if (self.data.isKeyboard) {
      //说明键盘是显示的，再次点击要隐藏键盘
      self.setData({
        isKeyboard: false,
        isFocus: true
      });
    } else {
      //说明键盘是隐藏的，再次点击显示键盘
      self.setData({
        isFocus: true,
        isKeyboard: true
      });
    }
  },

  //键盘事件
  tapKeyboard: function (e) {
    var self = this;
    //获取键盘点击的内容，并将内容赋值到textarea框中
    var tapIndex = e.target.dataset.index;
    var tapVal = e.target.dataset.val;
    var keyboardValue;
    var specialBtn;
    var tapNum;
    if (tapVal == '巛') {
      //说明是删除
      self.data.textArr.pop();
      if (self.data.textArr.length == 0) {
        //说明没有数据了，返回到省份选择键盘
        this.specialBtn = false;
        this.tapNum = false;
        this.keyboardValue = self.data.keyboard1;
      } else if (self.data.textArr.length == 1) {
        //只能输入字母
        this.tapNum = false;
        this.specialBtn = true;
        this.keyboardValue = self.data.keyboard2;
      } else {
        this.specialBtn = true;
        this.tapNum = true;
        this.keyboardValue = self.data.keyboard2;
      }
      self.data.textValue = self.data.textArr.join('');
      self.setData({
        textValue: self.data.textValue,
        keyboardValue: this.keyboardValue,
        specialBtn: this.specialBtn,
        tapNum: this.tapNum
      });
      return false;
    }
    if (self.data.textArr.length >= 7) {
      return false;
    }
    self.data.textArr.push(tapVal);
    self.data.textValue = self.data.textArr.join('');
    self.setData({
      textValue: self.data.textValue,
      keyboardValue: self.data.keyboard2,
      specialBtn: true
    });
    if (self.data.textArr.length > 1) {
      //展示数字键盘
      self.setData({
        tapNum: true
      });
    }
  },

  //特殊键盘事件（删除和完成）
  tapSpecBtn: function (e) {
    var self = this;
    var btnIndex = e.target.dataset.index;
    if (btnIndex == 0) {
      //说明是完成事件
      if (self.data.textArr.length < 7) {
        wx.showToast({
          title: '请输入正确的车牌号',
          icon: 'success',
          mask: true,
          image: '../../images/icon_error.png',
          duration: 2000
        });
      } else {
        if (!checkNetWork.checkNetWorkStatu()) {
          console.log('网络错误');
        } else {
          wx.showLoading({
            title: '提交中',
            mask: true
          });
          wx.request({
            url:
            '',
            method: 'post',
            data: {
              plateNo: self.data.textValue
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
              wx.hideLoading();
              var response = res.data.data;
              if (res.data.errorCode == 0) {
                //说明请求成功了,跳转到支付页面
                wx.navigateTo({
                  url:
                  '../payment/payment?plateNo=' +
                  response.plateNo +
                  '&cost=' +
                  response.cost +
                  '&phoneNumber=' +
                  self.data.phoneNumber
                });
              } else if (res.data.errorCode == 1) {
                //说明不用支付
                var msg = res.data.title;
                wx.showModal({
                  title: msg,
                  content: res.data.errorMessage,
                  showCancel: false,
                  success: function (res) {
                    if (res.confirm) {
                    }
                  }
                });
              }
            },
            complete: function () {
              wx.hideLoading();
            }
          });
        }
      }
    }
  },

  //添加input
  addInput: function() {
    console.log("addInput");
  }
})