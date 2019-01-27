import React, { Component } from 'react'
import { Image, View } from 'react-native'
import Background from '../MyProfile/ScreenBackground'

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={{height:"100%", width:"100%"}}>
      <Background style={{height:"100%", width:"100%", position:'absolute'}} />
      </View>
    )
  }
}