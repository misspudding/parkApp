Page({
  data: {
    originalpwd: 'aaaa', //原密码
    newresult: '', //提示信息
    Originalkind: 'none', //图片显示与否
    Originalimage: '../../resource/images/right.png', //对错图片显示与否
    newclassify: 'none', //提示显示显示与否
    kind: 'none', //输入密码右边的图片显示与否
    classify: 'none', //输入密码的错误提示显示与否
    result: '', //输入密码的错误提示的内容
    image: '../../resource/images/right.png', //输入密码正确与否的图片
    confirminfo: '', //确认密码的提示信息
    distype: 'none', //确认密码的提示信息显示与否
    inputtext: '', //输入宽的内容
    inputconfirm: '', //确认框的内容
    one: false, //input的光标
    two: true,
    three: true,
    focusbooleanO:true,
    focusbooleanT: false,
    focusbooleanR: false,
    imageConfirm: '../../resource/images/wrong.png',
    kindComfirm: 'none',
    search: '',//输入框的值
    newPwd:'',//输入框新密码的值,

  },

  originalcheck: function(e) {
    var newres = e.detail.value;
    var oldres = this.data.originalpwd;
       if (newres != oldres) {
      this.setData({
        newresult: '您输入的密码与原密码不一致',
        newclassify: 'block',
        Originalkind: 'block',
        Originalimage: '../../resource/images/wrong.png',
        one: false,
        two: true,
        three: true,
      })
    } else {
      this.setData({
        newresult: '',
        newclassify: 'none',
        Originalkind: 'block',
        Originalimage: '../../resource/images/right.png',
        two: false,
        three: true,
      })
    }
  },

  check: function(e) {
    var res = e.detail.value;
    var reg = new RegExp(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]{4,16}/);
    if (reg.test(res)) {
      this.setData({
        result: '',
        kind: 'block',
        classify: 'none',
        image: '../../resource/images/right.png',
        inputtext: res,
        two: true,
        three: false,
      })
    } else {
      if (res.length < 4) {
        this.setData({
          result: '4-16个字符，至少包含一个字母',
          kind: 'block',
          classify: 'block',
          image: '../../resource/images/wrong.png',
          two: false,
          three: true,
        })

      } else {
        this.setData({
          result: '至少包含一个字母',
          kind: 'block',
          classify: 'block',
          image: '../../resource/images/wrong.png',
          two: false,
          three: true,
        })
      }
    }
    return res;
  },

  confirm: function(e) {
    var confirmnum = e.detail.value;
    this.setData({
      inputconfirm: confirmnum,
      one: false,
      two: true,
      three: false,
    })

  },
  passWord: function() {
    var inputtext = this.data.inputtext;
    var inputconfirm = this.data.inputconfirm;
    console.log(inputtext);
    if (inputtext !== inputconfirm) {
      this.setData({
        distype: 'block',
        confirminfo: '新密码和确认密码输入不一致,请重新输入',
        imageConfirm: '../../resource/images/wrong.png',
        kindComfirm: 'block',
      })
    } else {
      this.setData({
        kindComfirm: 'none',
        imageConfirm: '../../resource/images/right.png',
      })
    }
  },

//输入原密码错误时，点击错误小图标，清空input的值
  clearinput: function(e) {
    var errorimg = this.data.Originalimage;
    var img = '../../resource/images/wrong.png';
    if (errorimg == img) {
      this.setData({
        search: '',
        Originalkind:'none',
        newclassify:'none',
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
  clearnewPwd: function (e) {
    var errorimg = this.data.imageConfirm;
    var img = '../../resource/images/wrong.png';
    if (errorimg == img) {
      this.setData({
        conPwd: '',
        kindComfirm: 'none',
        distype:'none',
      })
    }
  },


})