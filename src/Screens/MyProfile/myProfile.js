import React, { Component } from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import ScreenBackground from './screenBackground'
import NameAndImage from './NameAndImage'
import TotalPoints from './TotalPoints'
import { Icon } from 'react-native-elements'

export default class myProfile extends Component {
  render() {
    return (
            <ImageBackground style={styles.container} source={require('../../../assets/images/ScreenBackground.png')} >
            
                <NameAndImage/>
                <TotalPoints/>
                <View style={styles.chart} /> 
            </ImageBackground>      
    )
  }
}

const styles = StyleSheet.create({
    container: {
    //    marginTop:30,
       height:'100%',
       width:'100%',
       alignItems:'center',
       justifyContent:'space-evenly'
    },
    chart: {
    //  marginTop:30,
        height:'30%',
        width:'100%',
        backgroundColor:'blue'
        }
  });
