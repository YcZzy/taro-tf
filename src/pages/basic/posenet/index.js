import { Block, View, Camera, Canvas } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import { globalData } from '../../../utils'
// pages/body-pix/index.js
const app = Taro.getApp()

import { Classifier } from '../../../models/posenet/classifier.js'

import './index.scss'
const CANVAS_ID = 'canvas'

@withWeapp({
  classifier: null,

  ctx: null,

  /**
   * Page initial data
   */
  data: {
    cameraBlockHeight:
      globalData.systemInfo.screenHeight - globalData.CustomBar,
    predicting: false,
    videoWidth: null,
    videoHeight: null
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
    setTimeout(() => {
      this.ctx = Taro.createCanvasContext(CANVAS_ID)
    }, 500)

    this.initClassifier()

    const context = Taro.createCameraContext(this)
    const listener = context.onCameraFrame(frame => {
      this.executeClassify(frame)
    })
    listener.start()
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    if (this.classifier && this.classifier.isReady()) {
      this.classifier.dispose()
    }
  },

  initClassifier() {
    this.showLoadingToast()

    this.classifier = new Classifier('front', {
      width: globalData.systemInfo.screenWidth,
      height: this.data.cameraBlockHeight
    })

    this.classifier
      .load()
      .then(() => {
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

  executeClassify(frame) {
    if (this.classifier && this.classifier.isReady() && !this.data.predicting) {
      this.setData(
        {
          predicting: true
        },
        () => {
          this.classifier
            .detectSinglePose(frame)
            .then(pose => {
              console.log(pose)
              const nosePosition = pose.keypoints[0].position

              this.classifier.drawSinglePose(this.ctx, pose)

              this.setData({
                predicting: false,
                nosePosition:
                  Math.round(nosePosition.x) + ', ' + Math.round(nosePosition.y)
              })
            })
            .catch(err => {
              console.log(err, err.stack)
            })
        }
      )
    }
  },

  showLoadingToast() {
    Taro.showLoading({
      title: '拼命加载模型'
    })
  },

  hideLoadingToast() {
    Taro.hideLoading()
  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {
    if (this.classifier && this.classifier.isReady()) {
      this.classifier.dispose()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: 'AI Pocket - 身体部位识别'
    }
  }
})
class _C extends React.Component {
  render() {
    const { cameraBlockHeight } = this.data
    return (
      <Block>
        <Camera
          devicePosition='front'
          flash='off'
          onError={this.error}
          frameSize='medium'
          className='camera'
          style={'height:' + cameraBlockHeight + 'px;'}
        >
          <Canvas id='canvas' canvasId='canvas' className='canvas'></Canvas>
        </Camera>
      </Block>
    )
  }
}

export default _C
