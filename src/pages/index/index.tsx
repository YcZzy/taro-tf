import { Block, ScrollView, Image, View } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './index.scss'
//index.js
//获取应用实例
@withWeapp({
  data: {
    list: [
      {
        title: 'AI识别',
        img: 'https://ai.flypot.cn/pocket/images/index-imagenet-bg.jpg',
        url: '/pages/basic/mobilenet/index'
      },
      // {
      //   title: '动作捕捉',
      //   img: 'https://ai.flypot.cn/pocket/images/index-posenet-bg.jpg',
      //   url: '/pages/basic/posenet/index'
      // },
      {
        title: '录入识别',
        img: 'https://ai.flypot.cn/pocket/images/index-teach-bg.jpg',
        url: '/pages/game/teachable-machine/index'
      }
    ]
  },

  onShareAppMessage() {
    return {
      title: 'AI Pocket - 口袋里的 AI'
    }
  },

  handleCardClicked(e) {
    Taro.navigateTo({
      url: e.currentTarget.dataset.url
    })
  }
})
class _C extends React.Component {
  render() {
    const { list } = this.data
    return (
      <Block>
        <ScrollView scrollY className='scrollPage'>
          <Image
            src={require('../../images/index-bg.png')}
            mode='widthFix'
            className='png'
          ></Image>
          <Image
            src='https://ai.flypot.cn/pocket/images/wave.gif'
            mode='scaleToFill'
            className='gif-wave-index'
          ></Image>
          <View className='cu-card'>
            {list.map((item, idx) => {
              return (
                <View
                  className='cu-item bg-img shadow-blur'
                  style={'background-image:url(' + item.img + ')'}
                  onClick={this.handleCardClicked}
                  data-url={item.url}
                  key='idx'
                >
                  <View className='cardTitle'>{item.title}</View>
                </View>
              )
            })}
          </View>
        </ScrollView>
      </Block>
    )
  }
}

export default _C
