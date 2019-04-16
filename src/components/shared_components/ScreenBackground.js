import React, { Component } from 'react'
import { Animated, Image, Easing, View, Dimensions } from 'react-native'
import { LinearGradient } from "expo";

export default class ScreenBackground extends Component {

  constructor () {
    super()
    this.spinValue = new Animated.Value(0)
    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
    };
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
      <LinearGradient colors={['#3986e0', '#6535bc']}  style={{width: '100%', height: '100%'}} />
        <Animated.Image
        style={[{ 
        width: this.state.width + 2000,
        height: this.state.height + 1000,
        position: 'absolute',
        alignSelf: 'center',
        resizeMode: 'cover',
        transform: [{rotate: spin}]

         }
        ]}
        source={require('../../../assets/images/motion_background.png')}
        >
        </Animated.Image>

      </View>
    )
  }
}

  