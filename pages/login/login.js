// pages/logins/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        phone: '', //用戶手機號碼
        password: '' //用戶密碼
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    handleInput(event) {
        // let type = event.currentTarget.id;//使用id傳值
        let type = event.currentTarget.dataset.type; //使用data-key=value傳值,需多個傳值時使用 
        // console.log(type, event.detail.value)
        // console.log(event)
        this.setData({
            [type]: event.detail.value
        })
    },
    login() {
        //收集登入表單單項數據
        let {
            phone,
            password
        } = this.data;
        //前端驗證(內容是否為空/手機號碼格式是否正確)
        if (!phone) { //內容為空時
            wx.showToast({
                title: '請輸入電話號碼',
                icon: 'none'
            })
        }
        let phoneReg = /^1(3|4|5|6|7|8|9)\d{9}$/; //檢查電話格式是否正確(中國大陸)
        if (!phoneReg.test(phone)) { //格式不正確
            wx.showToast({
                title: '請輸入正確的手機號碼格式',
                icon: 'none'
            })
            return;
        }
        if (!password) {
            wx.showToast({
                title: '請輸入密碼',
                icon: 'none'
            })
            return;
        }
        wx.showToast({
            title: '前端驗證通過'
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