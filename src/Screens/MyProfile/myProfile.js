import React, { Component } from 'react'
import { View, StyleSheet, ImageBackground, Text } from 'react-native'
import ScreenBackground from './screenBackground'
import NameAndImage from './NameAndImage'
import TotalPoints from './TotalPoints'
import DoubleLineChart from './DoubleLineChart'
import LineChart from "react-native-responsive-linechart";


const data = [0, 40, 19, 32, 15, 52, 55, 20, 60, 78, 42, 56];
// const config = {
//   interpolation: "spline",
//   line: { strokeColor: "green", strokeWidth: 2 },
//   yAxis: { visible: false },
//   area: {
//     gradientFrom: "#999",
//     gradientFromOpacity: 1,
//     gradientTo: "#fff",
//     gradientToOpacity: 1
//   },
//   grid: { visible: false 
//   },
//   backgroundColor: '#8888'
// };
const config = {
  line: {
    strokeWidth: 1,
    strokeColor: "#c4f946"
  },
  area: {
    gradientFrom: "#7281a7",
    gradientFromOpacity: 1,
    gradientTo: "#7281a7",
    gradientToOpacity: 0,
  },
  yAxis: {
    visible: false
  },
  grid: {
    visible: false,
    backgroundColor: "transparent",

  },
  interpolation: "none",
  backgroundColor: "transparent",
};
export default class myProfile extends Component {
  render() {
    return (
            <ImageBackground style={styles.container} source={require('../../../assets/images/ScreenBackground.png')} >
            
                <NameAndImage/>
                <TotalPoints/>
                <View style={styles.chart} >
                  <DoubleLineChart/>  
                </View>
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
      height:'30%',
      width:'90%',
      // padding:15
    }
  });
