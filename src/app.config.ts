export default {
  pages: [
    "pages/index/index",
    "pages/basic/home/index",
    "pages/game/home/index",
    "pages/about/home/index",
    "pages/basic/mobilenet/index",
    "pages/about/story/index",
    "pages/about/log/index",
    "pages/game/teachable-machine/index",
    "pages/basic/posenet/index"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTextStyle: "black"
  },
  // usingComponents: { 'cu-custom': 'pages/components/cu-custom/cu-custom' },
  // tabBar: {
  //   color: "#aaa",
  //   selectedColor: "#39b54a",
  //   backgroundColor: "#fff",
  //   borderStyle: "black",
  //   list: [
  //     {
  //       pagePath: "pages/index/index",
  //       text: "首页",
  //       iconPath: "images/home.png",
  //       selectedIconPath: "images/home-on.png"
  //     },{
  //       pagePath: "pages/basic/mobilenet/index",
  //       text: "AI识别",
  //       iconPath: "images/basic.png",
  //       selectedIconPath: "images/basic-on.png"
  //     },{
  //       pagePath: "pages/game/teachable-machine/index",
  //       text: "录入识别",
  //       iconPath: "images/game.png",
  //       selectedIconPath: "images/game-on.png"
  //     }
  //     // {
  //     //   pagePath: "pages/basic/home/index",
  //     //   text: "基础",
  //     //   iconPath: "images/basic.png",
  //     //   selectedIconPath: "images/basic-on.png"
  //     // },
  //     // {
  //     //   pagePath: "pages/game/home/index",
  //     //   text: "趣味",
  //     //   iconPath: "images/game.png",
  //     //   selectedIconPath: "images/game-on.png"
  //     // },
  //     // {
  //     //   pagePath: "pages/about/home/index",
  //     //   text: "关于",
  //     //   iconPath: "images/about.png",
  //     //   selectedIconPath: "images/about-on.png"
  //     // }
  //   ]
  // },
  plugins: { tfjsPlugin: { version: "0.1.0", provider: "wx6afed118d9e81df9" } }
};
