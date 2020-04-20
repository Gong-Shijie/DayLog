var wxCharts = require('../../utils/wxcharts.js');
var app = getApp();
var pieChart = null;
Page({
    data: {
        imageUrl:"cloud://gongshijie-2d87t.676f-gongshijie-2d87t-1301785064/c.jpg",
        cloudFlag:true,
        photoFlag:true
    },
    touchHandler: function (e) {
        console.log(pieChart.getCurrentDataIndex(e));
    },        
    onLoad: function (e) {
        var windowWidth = 220;
        try {
            var res = wx.getSystemInfoSync();
            windowWidth = res.windowWidth;
        } catch (e) {
            console.error('getSystemInfoSync failed!');
        }

        pieChart = new wxCharts({
            animation: true,
            canvasId: 'pieCanvas',
            type: 'pie',
            series: [{
                name: '已打卡',
                data: 15,
            }, {
                name: '未打卡',
                data: 35,
            }],
            width: windowWidth,
            height: 220,
            dataLabel: true,
        });
    },
    showPhoto(){
        var photoFlag = this.data.photoFlag;
        photoFlag = !photoFlag;
        this.setData({
            photoFlag:photoFlag
        })},


    showCloud(){

        var cloudFlag = this.data.cloudFlag;
        cloudFlag = !cloudFlag;
        this.setData({
            cloudFlag:cloudFlag
        })}



});