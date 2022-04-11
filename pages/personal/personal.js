let startY = 0; //手指起始位置
let moveY = 0; //手指移動座標
let moveDistance = 0; //手指移動距離

// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coverTransform: 'translateY(0)',
    coverTransition: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  toLogin(){
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  handleTouchStart(event) {
    this.setData({
      coverTransition: ""
    })
    // console.log('start');
    startY = event.touches[0].clientY; //獲取手指起始座標
  },
  handleTouchMove(event) {
    // console.log('move');
    moveY = event.touches[0].clientY; //獲取手指移動座標
    moveDistance = moveY - startY;
    // console.log(moveDistance);
    if (moveDistance <= 0) {
      return;
    }
    if (moveDistance >= 80) {
      moveDistance = 80;
    }
    this.setData({
      coverTransform: `translateY(${moveDistance}px)`
    })
  },
  hanldTouchEnd() {
    // console.log('end')  ;
    this.setData({
      coverTransform: `translateY(0rpx)`,
      coverTransition: "transform 1s linear"
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})