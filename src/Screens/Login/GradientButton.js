import React, { Component } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo';
import FTCStyledText from '../../components/FTCStyledText';


export default class GradientButton extends Component {
  render() {
    return (
      <LinearGradient colors={['#3986e0', '#6535bc']} start={[0.0, 0.5]} end={[1.0, 0.5]} style={[styles.outer, this.props.style]}  >

      <TouchableOpacity style={styles.inner} onPress={this.props.onPress}>
          <View style={styles.inner}>
            <FTCStyledText style={styles.title} >{this.props.title}</FTCStyledText>
            <Image style={styles.icon} source={this.props.icon} />
          </View>
      </TouchableOpacity>
            
      </LinearGradient>
    )
  }
}

const styles={
    outer: {
        alignItems:'center',
        justifyContent: 'center',
        // paddingTop:10,
        // paddingLeft:10,
        width: "70%",
        height: 60,
        borderRadius: 160 / 2,

      },
      inner:{
        alignItems:'center',
        justifyContent: 'center',
        width: "98%",
        height: "92%",
        borderRadius: 160 / 2,  
        // top:5,
        position:'absolute',
        alignSelf: 'center',
        backgroundColor:'white'
      },
      title:{
          color:"#333333",
          fontFamily:'Cairo-Bold'
      },
      icon:{
        height: 30,
        width: 30,
        resizeMode:'center',
    
        position:'absolute',
        right:10
      }
}

