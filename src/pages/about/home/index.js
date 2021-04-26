import {
  Block,
  ScrollView,
  View,
  Image,
  Text,
  Navigator,
  Button
} from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './index.scss'

@withWeapp({
  /**
   * 页面的初始数据
   */
  data: {
    viewCount: 0,
    starCount: 0,
    forkCount: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let addUpNum = (i = 0) => {
      if (i < 20) {
        setTimeout(() => {
          this.setData(
            {
              starCount: i,
              forkCount: i,
              viewCount: i
            },
            50
          )

          addUpNum(i + 1)
        })
      } else {
        this.setData({
          starCount: this.coutNum(240),
          forkCount: this.coutNum(46),
          viewCount: this.coutNum(21000)
        })
      }
    }

    addUpNum()
  },

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

  coutNum: function(e) {
    if (e > 1000 && e < 10000) {
      e = (e / 1000).toFixed(1) + 'k'
    }
    if (e > 10000) {
      e = (e / 10000).toFixed(1) + 'w'
    }
    return e
  },

  showModal: function(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },

  hideModal: function(e) {
    this.setData({
      modalName: null
    })
  },

  showQrcode: function() {
    Taro.previewImage({
      urls: ['https://ai.flypot.cn/pocket/images/zan-code.jpg'],
      current: 'https://ai.flypot.cn/pocket/images/zan-code.jpg' // 当前显示图片的http链接
    })
  }
})
class _C extends React.Component {
  render() {
    const { viewCount, starCount, forkCount } = this.data
    return (
      <ScrollView scrollY className="scrollPage">
        <View className="UCenter-bg">
          <Image
            src={require('../../../images/logo.png')}
            className="png"
            mode="widthFix"
          ></Image>
          <View className="text-xl">AI Pocket</View>
          <View className="margin-top-sm">
            <Text>By HunterXuan</Text>
          </View>
          <Image
            src="https://ai.flypot.cn/pocket/images/wave.gif"
            mode="scaleToFill"
            className="gif-wave"
          ></Image>
        </View>
        <View className="padding flex text-center text-grey bg-white shadow-warp">
          <View className="flex flex-sub flex-direction solid-right">
            <View className="text-xxl text-orange">{viewCount}</View>
            <View className="margin-top-sm">
              <Text className="cuIcon-attentionfill"></Text>View
            </View>
          </View>
          <View className="flex flex-sub flex-direction solid-right">
            <View className="text-xxl text-blue">{starCount}</View>
            <View className="margin-top-sm">
              <Text className="cuIcon-favorfill"></Text>Star
            </View>
          </View>
          <View className="flex flex-sub flex-direction">
            <View className="text-xxl text-green">{forkCount}</View>
            <View className="margin-top-sm">
              <Text className="cuIcon-fork"></Text>Fork
            </View>
          </View>
        </View>
        <View className="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg radius">
          <View className="cu-item arrow">
            <Navigator
              className="content"
              url="/pages/about/story/index"
              hoverClass="none"
            >
              <Text className="cuIcon-infofill text-grey"></Text>
              <Text className="text-grey">关于</Text>
            </Navigator>
          </View>
          <View className="cu-item arrow">
            <Navigator
              className="content"
              url="/pages/about/log/index"
              hoverClass="none"
            >
              <Text className="cuIcon-formfill text-green"></Text>
              <Text className="text-grey">更新日志</Text>
            </Navigator>
          </View>
          <View className="cu-item arrow">
            <View className="content" onClick={this.showQrcode}>
              <Text className="cuIcon-appreciatefill text-red"></Text>
              <Text className="text-grey">赞赏支持</Text>
            </View>
          </View>
          <View className="cu-item arrow">
            <Button className="cu-btn content" openType="feedback">
              <Text className="cuIcon-writefill text-cyan"></Text>
              <Text className="text-grey">意见反馈</Text>
            </Button>
          </View>
        </View>
        <View className="cu-tabbar-height"></View>
      </ScrollView>
    )
  }
} // miniprogram/pages/about/home/index.js

export default _C
