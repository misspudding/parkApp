// pages/carRenewal/carRenewal.js
Page({

  data: {
    array: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    index: 0,
    money:300,
    date:'2018.01.01',
  },

  bindPickerChange: function (e) {
    var that = this;
    var addMonth = this.data.array[e.detail.value];
    var date = that.dateChange(addMonth);
    this.setData({
      index: e.detail.value,
      date:date
    })
    
  },
  dateChange: function (e) {
    //console.log("inner dateChange")
    //console.log(e);
    var addMonth = e;
    var timeArray = this.data.date.split('.');
    var year = parseInt(timeArray[0]);
    var month = parseInt(timeArray[1]) + parseInt(addMonth);
    var day = parseInt(timeArray[2]);
    if (month > 12) {
      month = 1;
      year += 1;
    }
    var date = (year + '.' + month + '.' + day)
    return date;
  }
})