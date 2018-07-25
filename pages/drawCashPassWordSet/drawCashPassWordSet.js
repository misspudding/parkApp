// pages/drawCashPassWordSet/drawCashPassWordSet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kind: 'none',//输入密码右边的图片显示与否
    classify: 'none',//输入密码的错误提示显示与否
    result: '',//输入密码的错误提示的内容
    image: '../../resource/images/right.png',//输入密码正确与否的图片
    confirminfo:'',//确认密码的提示信息
    distype:'none',//确认密码的提示信息显示与否
    inputtext: '',//输入宽的内容
    inputconfirm: '',//确认框的内容
    one:false,
    two:true,
    newPwd:'',
    newPwdCom:'',
    imageCom:'../../resource/images/right.png',
    kindCom:'none',
  },


  onShareAppMessage: function () {

  },


  check: function (e) {
    var res = e.detail.value;
    var reg = new RegExp(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]{4,16}/);
    if (reg.test(res)) {
      this.setData({
        result: '',
        kind: 'block',
        classify: 'none',
        image: '../../resource/images/right.png',
        inputtext: res,
        two: false,
      })
    } else {
      if (res.length < 4) {
        this.setData({
          result: '4-16个字符，至少包含一个字母',
          kind: 'block',
          classify: 'block',
          image: '../../resource/images/wrong.png',
          two: true,
        })

      } else {
        this.setData({
          result: '至少包含一个字母',
          kind: 'block',
          classify: 'block',
          image: '../../resource/images/wrong.png',
          two:true,
        })
      }
    }
   return res;
  },
  confirm:function(e){
    var confirmnum = e.detail.value;
    this.setData({
      inputconfirm: confirmnum,
      one: true,
      two: false,
    })
    
  },
  passWord: function () {
    var inputtext = this.data.inputtext;
    var inputconfirm = this.data.inputconfirm;
    console.log(inputtext);
    if (inputtext !== inputconfirm) {
      this.setData({
        distype: 'block',
        confirminfo: '两次密码输入不一致',
        imageCom: '../../resource/images/wrong.png',
        kindCom:'block',
      })
    }else{
      this.setData({
        imageCom: '',
        kindCom: 'none',
      })
    }
  },


  //输入新密码错误时，点击错误小图标，清空input的值
  clearPwd: function (e) {
    var errorimg = this.data.image;
    var img = '../../resource/images/wrong.png';
    if (errorimg == img) {
      this.setData({
        newPwd: '',
        kind: 'none',
        classify:'none',
      })
    }
  },

  //输入新密码错误时，点击错误小图标，清空input的值
  clearNEWPwd: function (e) {
    var errorimg = this.data.imageCom;
    var img = '../../resource/images/wrong.png';
    if (errorimg == img) {
      this.setData({
        newPwdCom: '',
        kindCom: 'none',
        distype:'none',
      })
    }
  },

})