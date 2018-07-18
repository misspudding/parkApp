Page({
  data: {
    countPark: 23,
    parkList: [{
      postId: 0,
      name: "湛江荣基国际广场",
      address: "湛江市经济开发区观海路183号",
      remainPark: 87,
      parkRule: "前15分钟免费,3小时内5元",
      latitude: 21.267691,
      longitude: 110.365639,
      scale: 16,
      howFar: 2
    }, {
      postId: 1,
      name: "湛江荣基国际广场",
      address: "湛江市经济开发区观海路183号",
      remainPark: 87,
      parkRule: "前15分钟免费,3小时内5元",
      latitude: 21.215870,
      longitude: 110.419050,
      scale: 16,
      howFar: 2
    }]
  },
  onLoad: function() {

  },

  /**
   * 
   */
  openParkDetail: function () {
    wx.navigateTo({
      url: '../parkDetail/parkDetail',
    })
  },

  /**
   * 开始导航
   */
  goToNavigation: function(e) {
    var postId = e.currentTarget.dataset.postid
    var latitude = this.data.parkList[postId].latitude;
    var longitude = this.data.parkList[postId].longitude;
    var scale = this.data.parkList[postId].scale;
    wx.openLocation({
      latitude: latitude,
      longitude: longitude,
      scale: scale
    })
  }
})