const app = getApp();
Component({
  data: {
    selected: 1,
    list: [
      {
        pagePath: "/pages/work/work",
        text: "工作",
        iconPath: "/static/tabar/work.png",
        selectedIconPath: "/static/tabar/selectWork.png"
      },
      {
        pagePath: "/pages/news/news",
        text: "消息",
        iconPath: "/static/tabar/news.png",
        selectedIconPath: "/static/tabar/selectNews.png"
      },
      {
        pagePath: "/pages/my/my",
        text: "我的",
        iconPath: "/static/tabar/my.png",
        selectedIconPath: "/static/tabar/selectMy.png"
      }
    ],
    newNews:app.globalData.newNews
  },
  created: function() {
    console.log(this.data.selected);
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      
      wx.switchTab({url})
    }
  }
})