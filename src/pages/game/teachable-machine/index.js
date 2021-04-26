import {
  Block,
  View,
  Camera,
  CoverView,
  ScrollView,
  Input,
  Button,
  Image,
} from "@tarojs/components";
import React from "react";
import Taro from "@tarojs/taro";
import withWeapp from "@tarojs/with-weapp";
import { globalData } from "../../../utils";
// pages/teachable-machine/index.js

import { Classifier } from "../../../models/teachable-machine/classifier.js";

import "./index.scss";

@withWeapp({
  ctx: null,

  frame: null,

  classifier: null,

  /**
   * 页面的初始数据
   */
  data: {
    predictionBlockHeight:
      globalData.systemInfo.screenHeight -
      globalData.systemInfo.screenWidth -
      globalData.CustomBar,
    currentSegment: 0,
    predicting: false,
    prediction: "样本不足",
    showHelpModal: false,
    imageGroups: [
      {
        label: "分类一",
        images: []
      },
      {
        label: "分类二",
        images: []
      },
      {
        label: "分类三",
        images: []
      }
    ]
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
    this.initClassifier();

    this.ctx = Taro.createCameraContext(this);

    let count = 0;
    const listener = this.ctx.onCameraFrame(frame => {
      count = count + 1;
      if (count === 3) {
        count = 0;
        this.frame = frame;

        this.executeClassify(frame);
      }
    });
    listener.start();
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    if (this.classifier && this.classifier.isReady()) {
      this.classifier.dispose();
    }
  },

  initClassifier() {
    this.showLoadingToast();

    this.classifier = new Classifier("back", {
      width: globalData.systemInfo.windowWidth,
      height: globalData.systemInfo.windowWidth
    });

    this.classifier
      .load()
      .then(_ => {
        this.hideLoadingToast();
      })
      .catch(err => {
        console.log(err);
        Taro.showToast({
          title: "网络连接异常",
          icon: "none"
        });
      });
  },

  showLoadingToast() {
    Taro.showLoading({
      title: "拼命加载模型"
    });
  },

  hideLoadingToast() {
    Taro.hideLoading();
  },

  onSegmentChange: function(e) {
    this.setData({
      currentSegment: e.target.dataset.index
    });
  },

  takeSample: function() {
    this.addSample(this.data.currentSegment);

    this.ctx.takePhoto({
      quality: "normal",
      success: res => {
        let imageGroups = this.data.imageGroups;
        imageGroups[this.data.currentSegment].images.push({
          imagePath: res.tempImagePath
        });

        this.setData({
          imageGroups: imageGroups
        });
      }
    });
  },

  cleanSample: function() {
    let imageGroups = this.data.imageGroups;
    imageGroups[this.data.currentSegment].images = [];

    this.setData({
      imageGroups: imageGroups
    });

    this.classifier.clearClass(this.data.currentSegment);
  },

  addSample: function(index) {
    this.classifier.addExample(this.frame, index);
  },

  executeClassify: function(frame) {
    if (
      this.classifier &&
      this.classifier.getNumClasses() == 3 &&
      !this.data.predicting
    ) {
      this.setData(
        {
          predicting: true
        },
        () => {
          this.classifier
            .predictClass(frame)
            .then(res => {
              this.setData({
                predicting: false,
                prediction: this.data.imageGroups[res.classIndex].label
              });
            })
            .catch(err => {
              console.log(err);
            });
        }
      );
    }
  },

  handleInputChange: function(e) {
    const imageGroups = this.data.imageGroups;
    imageGroups[this.data.currentSegment]["label"] = e.detail.value;
    this.setData({
      imageGroups: imageGroups
    });
  },

  showHelp: function() {
    this.setData({
      showHelpModal: true
    });
  },

  hideHelp: function() {
    this.setData({
      showHelpModal: false
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: "AI Pocket - 初识 AI"
    };
  }
})
class _C extends React.Component {
  render() {
    const {
      showHelpModal,
      prediction,
      predictionBlockHeight,
      currentSegment,
      imageGroups
    } = this.data;
    return (
      <Block>
        <View className='page'>
          <View className='page__bd page__bd_spacing'>
            <Camera
              devicePosition='back'
              flash='off'
              onError={this.error}
              frameSize='medium'
              className='camera'
            >
              <CoverView
                className='prediction-view'
                hidden={showHelpModal ? true : false}
              >
                {prediction}
              </CoverView>
            </Camera>
            <ScrollView
              className='action-block bg-white'
              style={"height: " + predictionBlockHeight + "px;"}
              scrollY
            >
              <ScrollView scrollX className='bg-white nav text-center'>
                {imageGroups.map((item, index) => {
                  return (
                    <View
                      className={
                        "cu-item flex-sub " +
                        (index == currentSegment ? "text-blue cur" : "")
                      }
                      key='index'
                      onClick={this.onSegmentChange}
                      data-index={index}
                    >
                      {item["label"]}
                    </View>
                  );
                })}
              </ScrollView>
              <View className='flex solid-bottom padding-sm align-center'>
                <View className='padding-xs margin-xs radius text-right cation-name'>
                  <Input value='分类别名：' disabled></Input>
                </View>
                <View className='input-text padding-xs margin-xs radius'>
                  <Input
                    value={imageGroups[currentSegment]["label"]}
                    onChange={this.handleInputChange}
                  ></Input>
                </View>
              </View>
              <View className='flex align-center btn-cj padding-sm'>
                <View
                  className='flex flex-direction flex-twice'
                  style='padding-right: 10rpx;'
                >
                  <Button
                    className='cu-btn bg-yellow'
                    onClick={this.takeSample}
                  >
                    采集样本
                  </Button>
                </View>
                <View
                  className='flex flex-direction flex-twice'
                  style='padding-right: 10rpx;'
                >
                  <Button className='cu-btn bg-gry' onClick={this.cleanSample}>
                    清空样本
                  </Button>
                </View>
                <View className='flex flex-direction flex-sub'>
                  <Button className='cu-btn bg-black' onClick={this.showHelp}>
                    帮助
                  </Button>
                </View>
              </View>
              <ScrollView className='images-scroll-view padding-sm' scrollX>
                {imageGroups[currentSegment]["images"].map((item, index) => {
                  return (
                    <Block key={`imageGroups${index}`}>
                      <Image
                        className='sample-image'
                        src={item["imagePath"]}
                      ></Image>
                    </Block>
                  );
                })}
              </ScrollView>
            </ScrollView>
          </View>
          {showHelpModal && (
            <View
              className='cu-modal'
              onClick={this.hideHelp}
            >
              <View className='cu-dialog'>
                <View className='cu-bar bg-white justify-end'>
                  <View className='content'>使用帮助</View>
                </View>
                <View className='padding-xl text-left'>
                  <View>1. 修改各分类的「分类别名」</View>
                  <View>2. 点击「采集样本」按钮可以采集一张分类图像</View>
                  <View>3. 点击「清空样本」清空某个分类下的样本</View>
                  <View>4. 所有分类均采集样本后，会自动实时预测</View>
                </View>
              </View>
            </View>
          )}
        </View>
      </Block>
    );
  }
}

export default _C;
