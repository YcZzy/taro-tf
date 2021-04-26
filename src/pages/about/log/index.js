import { Block, View } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './index.scss'

@withWeapp({
  /**
   * 页面的初始数据
   */
  data: {},

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
              <View>更新日志</View>
            </Block>
          }
        ></CuCustom>
        <View className="cu-timeline">
          <View className="cu-item text-green">
            <View className="bg-green content shadow">
              <View className="cu-capsule radius">
                <View className="cu-tag bg-white text-green">v3.0.0</View>
                <View className="cu-tag line-white">2020/05/22</View>
              </View>
              <View className="margin-top-sm text-content">
                <View>1. 代码重构，使用小程序云开发</View>
                <View>2. 页面重构，更加炫丽多彩</View>
              </View>
            </View>
          </View>
          <View className="cu-item text-green">
            <View className="bg-green content shadow">
              <View className="cu-capsule radius">
                <View className="cu-tag bg-white text-green">v2.4.0</View>
                <View className="cu-tag line-white">2020/02/29</View>
              </View>
              <View className="margin-top-sm text-content">
                <View>1. 更新关于页面</View>
                <View>2. 修复小程序新版本引进的 Bug</View>
              </View>
            </View>
          </View>
          <View className="cu-item text-green">
            <View className="bg-green content shadow">
              <View className="cu-capsule radius">
                <View className="cu-tag bg-white text-green">v2.3.0</View>
                <View className="cu-tag line-white">2019/12/13</View>
              </View>
              <View className="margin-top-sm text-content">
                <View>1. 增加 SSD 模型</View>
                <View>2. 优化模型加载代码</View>
              </View>
            </View>
          </View>
          <View className="cu-item text-green">
            <View className="bg-green content shadow">
              <View className="cu-capsule radius">
                <View className="cu-tag bg-white text-green">v2.2.0</View>
                <View className="cu-tag line-white">2019/10/21</View>
              </View>
              <View className="margin-top-sm text-content">
                <View>1. 增加初识 AI</View>
                <View>2. 修复物品识别的 Bug</View>
              </View>
            </View>
          </View>
          <View className="cu-item text-green">
            <View className="bg-green content shadow">
              <View className="cu-capsule radius">
                <View className="cu-tag bg-white text-green">v2.1.0</View>
                <View className="cu-tag line-white">2019/10/08</View>
              </View>
              <View className="margin-top-sm text-content">
                <View>1. 增加页面分享功能</View>
              </View>
            </View>
          </View>
          <View className="cu-item text-green">
            <View className="bg-green content shadow">
              <View className="cu-capsule radius">
                <View className="cu-tag bg-white text-green">v2.0.0</View>
                <View className="cu-tag line-white">2019/08/13</View>
              </View>
              <View className="margin-top-sm text-content">
                <View>1. 代码重构，改用 tfjs-wechat 插件</View>
                <View>2. 使用 webgl 加速模型预测</View>
                <View>3. 添加 posenet</View>
                <View>4. 添加 bodypix</View>
              </View>
            </View>
          </View>
          <View className="cu-item text-green">
            <View className="bg-green content shadow">
              <View className="cu-capsule radius">
                <View className="cu-tag bg-white text-green">v1.0.0</View>
                <View className="cu-tag line-white">2019/05/11</View>
              </View>
              <View className="margin-top-sm text-content">
                <View>1. 第一个可用版本</View>
                <View>2. 添加实时成像功能</View>
                <View>3. 添加拍照分类功能</View>
              </View>
            </View>
          </View>
          <View className="cu-item text-green">
            <View className="bg-green content shadow">
              <View className="cu-capsule radius">
                <View className="cu-tag bg-white text-green">v0.0.1</View>
                <View className="cu-tag line-white">2018/12/09</View>
              </View>
              <View className="margin-top-sm text-content">
                <View>1. 创世版本</View>
                <View>2. 魔改了 tfjs-core</View>
                <View>3. 能够加载模型对本地图片进行分类</View>
              </View>
            </View>
          </View>
        </View>
      </Block>
    )
  }
} // miniprogram/pages/about/log/index.js

export default _C
