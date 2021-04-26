import { Block, View, Camera, ScrollView, Text } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import { Classifier } from '../../../models/mobilenet/classifier.js'
import { globalData } from '../../../utils'
import './index.scss'

//index.js

@withWeapp({
  classifier: null,

  data: {
    predictionBlockHeight:
      globalData.systemInfo.screenHeight -
      globalData.systemInfo.screenWidth -
      globalData.CustomBar,
    predicting: false,
    predictionRate: 0,
    preditionResults: [],
    result: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.initClassifier()

    // Start the camera API to feed the captured images to the models.
    const context = Taro.createCameraContext(this)

    let count = 0
    const listener = context.onCameraFrame(frame => {
      count = count + 1
      if (count === 3) {
        count = 0
        this.frame = frame

        this.executeClassify(frame)
      }
    })
    listener.start()
  },

  initClassifier() {
    this.showLoadingToast()

    this.classifier = new Classifier('back', {
      width: globalData.systemInfo.windowWidth,
      height: globalData.systemInfo.windowWidth
    })

    this.classifier
      .load()
      .then(_ => {
        this.hideLoadingToast()
      })
      .catch(err => {
        console.log(err)
        Taro.showToast({
          title: '网络连接异常',
          icon: 'none'
        })
      })
  },

  showLoadingToast() {
    Taro.showLoading({
      title: '拼命加载模型'
    })
  },

  hideLoadingToast() {
    Taro.hideLoading()
  },

  executeClassify: function(frame) {
    if (this.classifier && this.classifier.isReady() && !this.data.predicting) {
      this.setData(
        {
          predicting: true
        },
        () => {
          const start = Date.now()
          const predictionResults = this.classifier.classify(frame)
          const end = Date.now()

          this.setData({
            predicting: false,
            predictionRate: (1000 / (end - start)).toFixed(2),
            predictionResults: predictionResults
          })
        }
      )
    }
  },

  onUnload() {
    if (this.classifier) {
      this.classifier.dispose()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: 'AI Pocket - 常见物品识别'
    }
  }
})
class _C extends React.Component {
  render() {
    const {
      predictionBlockHeight,
      predictionRate,
      predictionResults
    } = this.data||{}
    console.log('%c [ this.data ]', 'font-size:13px; background:pink; color:#bf2c9f;', this.data)
    return (
      <Block>
        <View className='page'>
          <View className='page__bd'>
            <Camera
              devicePosition='back'
              flash='off'
              onError={this.error}
              frameSize='medium'
              className='camera'
            ></Camera>
            <ScrollView
              className='bg-white bg-view'
              style={'height: ' + predictionBlockHeight + 'px;'}
              scrollY
            >
              <View className='cu-bar bg-white solid-bottom'>
                <View className='action'>
                  <Text className='cuIcon-title text-blue'></Text>
                  {'实时预测: ' + predictionRate + ' fps'}
                </View>
              </View>
              <View className='padding bg-white'>
              {predictionResults && predictionResults.map((item, index) => {
                  return (
                    <View className='view-content' key={`result${index}`}>
                      <View className='view-cu'>
                        <View>{item.label}</View>
                        <View className='cu-progress round'>
                          <View
                            className='bg-red'
                            style={'width:' + item.value * 100 + '%;'}
                          ></View>
                        </View>
                      </View>
                    </View>
                  )
                })}
              </View>
            </ScrollView>
          </View>
        </View>
      </Block>
    )
  }
}

export default _C
