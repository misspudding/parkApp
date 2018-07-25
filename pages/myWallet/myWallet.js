const ctx = wx.createCanvasContext("bgCanvas"); //创建一个全局的canvas绘图上下文
const ctx2 = wx.createCanvasContext("runCanvas");
var mytime = null;
var n = 0;
var app = getApp()
Page({
  data: {
    before:1000,
    after:2000,
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
  },
  run(e) {
    var that = this;
    var src = that.data.src; //每个间隔所需绘制的弧度
    var allSrc = that.data.allSrc; //总共需要绘制的弧度
    n++;
    if (src * n > allSrc) {
      clearInterval(mytime); //如果绘制完成，停掉计时器，绘制结束
      n = 0;
      return;
    }
    var grade = Math.round(src * n / 1.5 * 100); //百分数
    var x = 180 / 750 * wx.getSystemInfoSync().windowWidth;
    var y = 140 / 750 * wx.getSystemInfoSync().windowWidth;
    var r = 110 / 750 * wx.getSystemInfoSync().windowWidth;
    ctx2.arc(x, y, r, 0.8 * Math.PI, (0.8 + src * n) * Math.PI); //每个间隔绘制的弧度
    ctx2.setStrokeStyle("#fda356");
    ctx2.setLineWidth("5");
    ctx2.setLineCap("round");
    ctx2.stroke();
    ctx2.beginPath();
    // ctx2.setFontSize(40); //注意不要加引号
    // ctx2.setFillStyle("#fda356");
    // ctx2.setTextAlign("center");
    // ctx2.setTextBaseline("middle");
    // ctx2.fillText(grade + "%", 100, 100);
    ctx2.draw();
  },
   onLoad: function () {
    var that = this;
    var before = that.data.before;
    var after = that.data.after;
    var percent = (before/after).toFixed(2)*100;
    var allSrc = 0.014 * percent //应该绘制的弧度
    var src = allSrc / 100 //计算出每个间隔应该绘制多少弧度。 
    that.setData({
      src: src,
      allSrc: allSrc
    });
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
    clearInterval(mytime);
    mytime = setInterval(that.run, 10)
  },
  onReady: function () {
    var x = 180 / 750 * wx.getSystemInfoSync().windowWidth;
    var y = 140 / 750 * wx.getSystemInfoSync().windowWidth;
    var r = 110 / 750 * wx.getSystemInfoSync().windowWidth;
    ctx.arc(x, y, r, 0.8 * Math.PI, 2.2 * Math.PI); //绘制圆形弧线
    ctx.setStrokeStyle("#fff"); //设置填充线条颜色
    ctx.setLineWidth("5"); //设置线条宽度
    ctx.setLineCap("round"); //设置线条端点样式
    ctx.stroke(); //对路径进行描边，也就是绘制线条。
    ctx.draw(); //开始绘制
  },
  /** 
   * 滑动切换tab 
   */
  bindChange: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  openDrawCash: function () {
    wx.navigateTo({
      url: '../drawCash/drawCash',
    })
  },
  openRecharge: function () {
    wx.navigateTo({
      url: '../recharge/recharge',
    })
  },
})