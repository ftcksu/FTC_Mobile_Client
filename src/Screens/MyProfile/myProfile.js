import React, { Component } from 'react'
import { View, StyleSheet, Animated, Image, Easing } from 'react-native'
import ScreenBackground from './ScreenBackground'
import NameAndImage from './NameAndImage'
import TotalPoints from './TotalPoints'
import DoubleLineChart from './DoubleLineChart'

export default class myProfile extends Component {
  
  
  render() {
    return (
      <View>
        <ScreenBackground style={{ position: 'absolute', top:0 }} />
        <View style={styles.container}  >
          <NameAndImage/>
          <TotalPoints/>
          <View style={styles.chart} >
            <DoubleLineChart/>  
          </View>
        </View>

      </View>      
    )
  }
}

const styles = StyleSheet.create({
    container: {
       height:"100%",
       width:"100%",
       alignItems:'center',
       justifyContent:'space-evenly',

    },
    chart: {
      height:'30%',
      width:'90%',
    }
  });
