import { Block, View, ScrollView, Text } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './index.scss'

@withWeapp({
  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 'help'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {},

  onTabChange: function(e) {
    this.setData({
      currentTab: e.target.dataset.name
    })
  }
})
class _C extends React.Component {
  render() {
    const { currentTab } = this.data
    return (
      <Block>
        <CuCustom
          bgColor="bg-gradual-green"
          isBack={true}
          renderBackText={
            <Block>
              <View>返回</View>
            </Block>
          }
          renderContent={
            <Block>
              <View>关于</View>
            </Block>
          }
        ></CuCustom>
        <ScrollView scrollX className="bg-white nav text-center">
          <View
            className={
              'cu-item flex-sub ' +
              (currentTab === 'help' ? 'text-blue cur' : '')
            }
            onClick={this.onTabChange}
            data-name="help"
          >
            常见问题
          </View>
          <View
            className={
              'cu-item flex-sub ' +
              (currentTab === 'story' ? 'text-blue cur' : '')
            }
            onClick={this.onTabChange}
            data-name="story"
          >
            开发故事
          </View>
          <View
            className={
              'cu-item flex-sub ' +
              (currentTab === 'author' ? 'text-blue cur' : '')
            }
            onClick={this.onTabChange}
            data-name="author"
          >
            作者简介
          </View>
          <View
            className={
              'cu-item flex-sub ' +
              (currentTab === 'opportunity' ? 'text-blue cur' : '')
            }
            onClick={this.onTabChange}
            data-name="opportunity"
          >
            合作交流
          </View>
        </ScrollView>
        <View>
          {currentTab === 'help' && (
            <Block>
              <View className="cu-bar bg-white solid-bottom margin-top">
                <View className="action">
                  <Text className="cuIcon-title text-blue"></Text>简介
                </View>
              </View>
              <View className="padding bg-white">
                <View className="indent-text">
                  AI Pocket 是一款可以在手机上运行 TF
                  模型的小程序，支持包括但不限于文本分类、语音识别、图像识别等模型。
                </View>
                <View className="indent-text">
                  由于需要联网下载模型文件，为了保证体验效果，请在网络良好条件下使用。
                </View>
              </View>
              <View className="cu-bar bg-white solid-bottom margin-top">
                <View className="action">
                  <Text className="cuIcon-title text-blue"></Text>特点
                </View>
              </View>
              <View className="padding bg-white">
                <View className="indent-text">
                  在需要使用机器学习算法（尤其涉及到神经网络模型时），通常的做法是前端（比如小程序）采集数据，通过网络调用后台提供的
                  API，从而实现模型预测。
                </View>
                <View className="indent-text">
                  AI Pocket 采用的是非主流做法：
                </View>
                <View className="indent-text">
                  1.
                  对训练得到的模型进行压缩，得到一个体积相对小、准确率尚可的模型；
                </View>
                <View className="indent-text">
                  2. 将模型缓存在 CDN 服务商的服务器上；
                </View>
                <View className="indent-text">
                  3.
                  在进行模型预测前，通过网络把模型下载到本机，然后在本地实时预测。
                </View>
              </View>
            </Block>
          )}
          {currentTab === 'story' && (
            <Block>
              <View className="cu-bar bg-white solid-bottom margin-top">
                <View className="action">
                  <Text className="cuIcon-title text-blue"></Text>导火索
                </View>
              </View>
              <View className="padding bg-white">
                <View className="indent-text">
                  某一天，大佬和我聊到
                  Tfjs，问我有没可能搬到小程序上，说是没准可以做个爆款。
                </View>
                <View className="indent-text">
                  经过一番魔改，我成功把 tfjs
                  移植到了微信小程序上。然而，由于小程序 API
                  诸多的不完善，以及没有办法优雅地用上
                  webgl，模型预测速度实在太慢，就没有了爆款的下文。
                </View>
              </View>
              <View className="cu-bar bg-white solid-bottom margin-top">
                <View className="action">
                  <Text className="cuIcon-title text-blue"></Text>首次开源
                </View>
              </View>
              <View className="padding bg-white">
                <View className="indent-text">
                  过了几个月，有人看到我写的一篇关于魔改 tfjs
                  的文章，留言表示很有兴趣，希望能开源。然后，我就整理了下旧代码并开源在了
                  GitHub 上。
                </View>
              </View>
              <View className="cu-bar bg-white solid-bottom margin-top">
                <View className="action">
                  <Text className="cuIcon-title text-blue"></Text>改良优化
                </View>
              </View>
              <View className="padding bg-white">
                <View className="indent-text">
                  又过了几个月，同事给我分享了一篇文章，里面有提到 TensorFlow
                  官方对小程序的支持插件。我掐指一算，感觉可以继续搞搞。
                </View>
                <View className="indent-text">
                  我连夜瞄了 tfjs 最近的更新和小程序插件的代码，发现 tfjs
                  开始考虑对多平台的支持，而且小程序也开放了更多有利的 API。
                </View>
                <View className="indent-text">
                  于是，我就把之前开源的 Demo 再完善了下，用上了 webgl
                  加速，预测速度飞起，便有了现在的 AI Pocket。
                </View>
              </View>
              <View className="cu-bar bg-white solid-bottom margin-top">
                <View className="action">
                  <Text className="cuIcon-title text-blue"></Text>把 AI 装进口袋
                </View>
              </View>
              <View className="padding bg-white">
                <View className="indent-text">
                  我希望把更多的 AI 模型装到 AI Pocket
                  上，在小程序上就可以跑机器学习/深度学习模型，打造一个「流弊」的
                  AI 口袋。
                </View>
              </View>
            </Block>
          )}
          {currentTab === 'author' && (
            <Block>
              <View className="cu-bar bg-white solid-bottom margin-top">
                <View className="action">
                  <Text className="cuIcon-title text-blue"></Text>简而言之
                </View>
              </View>
              <View className="padding bg-white">
                <View className="indent-text">
                  只不过是一介码农，希望能和优秀的人共事，一起影响世界。
                </View>
              </View>
              <View className="cu-bar bg-white solid-bottom margin-top">
                <View className="action">
                  <Text className="cuIcon-title text-blue"></Text>关于我
                </View>
              </View>
              <View className="padding bg-white">
                <View className="indent-text">
                  在校期间，我作为技术负责人和好友一同创建了 NYPT
                  站点，也因此结缘了诸多好友，大家都倾向叫我「猎人」。
                </View>
                <View className="indent-text">
                  某天心血来潮，我也开了个公众号「猎人杂货铺」，想分享一些工作上的技术积累、生活上的个人感悟等等。
                </View>
                <OfficialAccount></OfficialAccount>
                <View className="indent-text" style="text-indent: 0;">
                  <OfficialAccount></OfficialAccount>
                </View>
                <View className="indent-text">
                  研究生毕业之后，我来到美丽的厦门，就职于网宿科技，先后从事流程引擎、智能客服相关的设计开发工作。很感谢在网宿的同事和领导们，给了很多包容以及成长的机会。
                </View>
                <View className="indent-text">
                  于网宿离职后，投身于 STEAM/K12
                  的教育创业项目中，希望能为我国的素质教育发展贡献点力量。然而因为资金不到位等问题，只好告一段落。
                </View>
                <View className="indent-text">
                  目前，我在鹅厂 WXG
                  微信支付线搬砖。有兴趣来鹅厂的欢迎联系，当然我也帮内推其它厂，前提是聊得来。
                </View>
              </View>
              <View className="cu-bar bg-white solid-bottom margin-top">
                <View className="action">
                  <Text className="cuIcon-title text-blue"></Text>技能标签
                </View>
              </View>
              <View className="padding bg-white tech-tag-container">
                <View className="cu-tag bg-red">PHP</View>
                <View className="cu-tag bg-orange">Python</View>
                <View className="cu-tag bg-yellow">Vue</View>
                <View className="cu-tag bg-olive">AI</View>
                <View className="cu-tag bg-green">NLP</View>
                <View className="cu-tag bg-cyan">Docker</View>
                <View className="cu-tag bg-blue">Swarm</View>
                <View className="cu-tag bg-purple">Laravel</View>
                <View className="cu-tag bg-mauve">Camunda</View>
                <View className="cu-tag bg-pink">MiniProgram</View>
              </View>
            </Block>
          )}
          {currentTab === 'opportunity' && (
            <Block>
              <View className="cu-bar bg-white solid-bottom margin-top">
                <View className="action">
                  <Text className="cuIcon-title text-blue"></Text>代码贡献
                </View>
              </View>
              <View className="padding bg-white">
                <View className="indent-text">
                  目前只有我一个人在折腾，代码将不定期更新到 GitHub 仓库
                  HunterXuan/wx-tfjs-demo 上。欢迎有兴趣的同学一起加功能 &
                  DeBUG。
                </View>
              </View>
              <View className="cu-bar bg-white solid-bottom margin-top">
                <View className="action">
                  <Text className="cuIcon-title text-blue"></Text>合作交流
                </View>
              </View>
              <View className="padding bg-white">
                <View className="indent-text">
                  本人在前后端开发、Docker 集群架构、持续部署、人工智能（尤其
                  NLP）领域均有积累，可以快速提供成套的解决方案。
                </View>
                <View className="indent-text">
                  欢迎通过各种途径与我交流，包括但不限于微信公众号、个人博客、GitHub
                  等。
                </View>
              </View>
              <View className="cu-bar bg-white solid-bottom margin-top">
                <View className="action">
                  <Text className="cuIcon-title text-blue"></Text>联系方式
                </View>
              </View>
              <View className="bg-white">
                <View className="cu-list menu text-left solid-top">
                  <View className="cu-item">
                    <View className="content">
                      <Text className="cuIcon-news"></Text>
                      <Text className="text-grey">Blog</Text>
                    </View>
                    <View className="action">
                      <Text className="text-grey">hunterx.xyz</Text>
                    </View>
                  </View>
                  <View className="cu-item">
                    <View className="content">
                      <Text className="cuIcon-mail"></Text>
                      <Text className="text-grey">Email</Text>
                    </View>
                    <View className="action">
                      <Text className="text-grey">endpot@gmail.com</Text>
                    </View>
                  </View>
                  <View className="cu-item">
                    <View className="content">
                      <Text className="cuIcon-github"></Text>
                      <Text className="text-grey">GitHub</Text>
                    </View>
                    <View className="action">
                      <Text className="text-grey">github.com/HunterXuan</Text>
                    </View>
                  </View>
                  <View className="cu-item">
                    <View className="content">
                      <Text className="cuIcon-weixin"></Text>
                      <Text className="text-grey">公众号</Text>
                    </View>
                    <View className="action">
                      <Text className="text-grey">猎人杂货铺</Text>
                    </View>
                  </View>
                </View>
              </View>
            </Block>
          )}
        </View>
      </Block>
    )
  }
} // miniprogram/pages/about/story/index.js

export default _C
