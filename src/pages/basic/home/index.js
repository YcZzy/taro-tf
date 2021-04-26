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
        title: '物品识别',
        name: 'ImageNet',
        page: 'mobilenet',
        color: 'cyan',
        icon: 'scan'
      },
      {
        title: '动作捕捉',
        name: 'PoseNet',
        page: 'posenet',
        color: 'blue',
        icon: 'light'
      },
      {
        title: '人体检测',
        name: 'BodyPix',
        page: 'body-pix',
        color: 'purple',
        icon: 'people'
      },
      {
        title: '目标检测 ',
        name: 'SSD',
        page: 'coco-ssd',
        color: 'mauve',
        icon: 'focus'
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
          src={require('../../../images/basic-bg.png')}
          mode="widthFix"
          className="png"
          style="width:100%; height:486rpx"
        ></Image>
        <View className="nav-list">
          {elements.map((item, idx) => {
            return (
              <Navigator
                openType="navigate"
                hoverClass="none"
                url={'/pages/basic/' + item.page + '/index'}
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
} // miniprogram/pages/basic/home/index.js

export default _C
