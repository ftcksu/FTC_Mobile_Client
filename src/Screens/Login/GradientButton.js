import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { LinearGradient } from 'expo';
import FTCStyledText from '../../components/FTCStyledText';


export default class GradientButton extends Component {
  render() {
    return (
      <LinearGradient colors={['#3986e0', '#6535bc']} start={[0.0, 0.5]} end={[1.0, 0.5]} style={[styles.outer]}  >
            <View style={styles.inner}>
            <FTCStyledText style={styles.title} > تسجيل الدخول</FTCStyledText>
            </View>
      </LinearGradient>
    )
  }
}

const styles={
    outer: {
        marginBottom:30,
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
      }
}

