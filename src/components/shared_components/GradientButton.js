import React, { Component } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { primaryColor, secondaryColor } from "../../global/Constants";
import {FTCStyledText} from './';

// ==========
// props: 
//    title
//    icon
//    onPress
// ==========

export class GradientButton extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.outer, this.props.style]} onPress={this.props.onPress}>
      <LinearGradient colors={[primaryColor, secondaryColor]} style={[styles.inner, this.props.style]}  >

            <View style={styles.innerView}>
              <FTCStyledText style={styles.title} >{this.props.title}</FTCStyledText>
              <Image style={styles.icon} source={this.props.icon} />
            </View>
            
      </LinearGradient>
      </TouchableOpacity>
    )
  }
}

const styles={
    outer: {
        alignItems:'center',
        justifyContent: 'center',
        width: "100%",
        height: 60,

      },
      inner:{
        alignItems:'center',
        justifyContent: 'center',
        width: "75%",
        height: "100%",
        borderRadius: 30,  
        alignSelf: 'center',
      },
      innerView:{
        alignItems:'center',
        justifyContent: 'center',
        width: "98%",
        height: "92%",
        borderRadius: 30,
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

