import React, { Component } from 'react'
import { ImageBackground } from 'react-native'

export default class screenBackground extends Component {
  render() {
    return (
      <ImageBackground source={require('../../../assets/images/ScreenBackground.png')} style={{width: '100%', height: '100%', alignSelf: 'stretch'}} />
    )
  }
}

  