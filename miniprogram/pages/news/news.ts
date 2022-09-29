// pages/news/news.ts
const app:WechatMiniprogram.App.Instance<Record<string, any>> = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentData:[
      {
        avatar:"https://img01.sogoucdn.com/app/a/100520093/ae588be27ee085c4-fd668f66a830d70e-bcb76412aab683a7d1f972c04a769065.jpg",
        petName:"张三",
        content:"奥i好的那司机电话摆弄白哦收到",
        date:"18:00"
      },
      {
        avatar:"https://img01.sogoucdn.com/app/a/100520093/ae588be27ee085c4-fd668f66a830d70e-bcb76412aab683a7d1f972c04a769065.jpg",
        petName:"李四",
        content:"奥i好的那司机电话摆弄白哦收到",
        date:"18:00"
      },
      {
        avatar:"https://img01.sogoucdn.com/app/a/100520093/ae588be27ee085c4-fd668f66a830d70e-bcb76412aab683a7d1f972c04a769065.jpg",
        petName:"王五",
        content:"奥i好的那司机电话摆弄白哦收到",
        date:"18:00"
      },
      {
        avatar:"https://img01.sogoucdn.com/app/a/100520093/ae588be27ee085c4-fd668f66a830d70e-bcb76412aab683a7d1f972c04a769065.jpg",
        petName:"六六",
        content:"奥i好的那司机电话摆弄白哦收到",
        date:"18:00"
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow(){
    if(typeof this.getTabBar === "function" && this.getTabBar()) {
      this.getTabBar().setData({
        selected:1
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})