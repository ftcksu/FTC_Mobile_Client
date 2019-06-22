import React, { Component } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo';
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
      <TouchableOpacity style={styles.outer} onPress={this.props.onPress}>
      <LinearGradient colors={[primaryColor, secondaryColor]} start={[0.0, 0.5]} end={[1.0, 0.5]} style={[styles.inner, this.props.style]}  >

            <View style={styles.inner}>

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

