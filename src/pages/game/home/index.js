import {
  Block,
  ScrollView,
  Image,
  View,
  Navigator,
  Text
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
    elements: [
      {
        title: '初识 AI ',
        name: 'Teach',
        page: 'teachable-machine',
        color: 'purple',
        icon: 'magic'
      }
    ]
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
  onShareAppMessage: function() {}
})
class _C extends React.Component {
  render() {
    const { elements } = this.data
    return (
      <ScrollView scrollY className="scrollPage">
        <Image
          src={require('../../../images/game-bg.png')}
          mode="widthFix"
          className="response"
        ></Image>
        <View className="nav-list">
          {elements.map((item, idx) => {
            return (
              <Navigator
                hoverClass="none"
                url={'/pages/game/' + item.page + '/index'}
                className={'nav-li bg-' + item.color}
                key="idx"
              >
                <View className="nav-title">{item.title}</View>
                <View className="nav-name">{item.name}</View>
                <Text className={'cuIcon-' + item.icon}></Text>
              </Navigator>
            )
          })}
        </View>
        <View className="cu-tabbar-height"></View>
      </ScrollView>
    )
  }
} // miniprogram/pages/game/home/index.js

export default _C
