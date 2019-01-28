import React, { Component } from 'react'
import { Animated, Image, Easing } from 'react-native'

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
        duration: 14000,
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
      <Animated.Image
        style={[{
        width: "100%",
        height: "100%",
        position: 'absolute',
        backgroundColor:'black',
        resizeMode:'cover',
        // transform: [{rotate: spin}]
         },
         this.props.style]}
        source={require('../../../assets/images/ScreenBackground.png')}
        >
        </Animated.Image>
    )
  }
}

  