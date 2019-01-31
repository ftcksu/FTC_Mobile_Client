import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Easing } from 'react-native'
import ScreenBackground from './screenBackground'
import NameAndImage from './NameAndImage'
import TotalPoints from './TotalPoints'
import DoubleLineChart from './DoubleLineChart'

export class MyProfile extends Component {
  
  // onPress=()=>{
  //   this.props.navigation.navigate("")
  // }
  
  render() {
    return (
      <View>
        <ScreenBackground style={{ position: 'absolute', top:0, bottom:0 }} />
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
      width:'100%',
    }
  });
