import React, { Component } from 'react'
import { Animated, Image, Easing, View } from 'react-native'

export default class ScreenBackground extends Component {

  constructor () {
    super()
    this.spinValue = new Animated.Value(0)
  }
  componentDidMount () {
    this.spin()
  }
  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 30000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
    }

  render() {

    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return (
      <View style={[{width: "100%",
      height: "100%", position: 'absolute', top:0,bottom:0},this.props.style]} >
      <Image source={require('../../../assets/images/ScreenBackground.png')} style={{height:'100%',width:'100%'}} />
        <Animated.Image
        style={[{
        width: "200%",
        height: "300%",
        position: 'absolute',
        resizeMode:'contain',
        transform: [{rotate: spin}]
         }]}
        source={require('../../../assets/images/motion_background.png')}
        >
        </Animated.Image>

      </View>
    )
  }
}

  