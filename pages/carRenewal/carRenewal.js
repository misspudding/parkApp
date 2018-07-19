// pages/carRenewal/carRenewal.js
Page({

  data: {
    array: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    index: 0,
    money:300,
    date:'2018.01.01',
    tempDate:'2018.01.01'
  },

  bindPickerChange: function (e) {
    var that = this;
    var tempDate = that.dateChange(e);
    this.setData({
      index: e.detail.value,
      tempDate: tempDate
    })
    
  },
  dateChange: function (e) {
    var timeArray = this.data.date.split('.');
    var year = parseInt(timeArray[0]);
    var addMonth = this.data.array[e.detail.value];
    var month = parseInt(timeArray[1]) + parseInt(addMonth);
    console.log("originalMonth:" + parseInt(timeArray[1]));
    var day = parseInt(timeArray[2]);
    if (month > 12) {
      month ='0'+ 1;
      if(month < 10){
        month = '0' + month
      }else{
        
      }
      year += 1;
    }
    var date = (year + '.' + month + '.' + day)
    return date;
  }
})