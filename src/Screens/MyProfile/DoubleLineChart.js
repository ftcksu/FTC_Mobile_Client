import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import LineChart from "react-native-responsive-linechart";

const data1 = [0, 40, 1, 32, 15, 52, 55, 20, 60, 78, 42, 56];

const data2 = [0, 20, 33, 42, 55, 62, 75, 80, 90, 108, 112, 126];


const config1 = {
    line: {
      strokeWidth: 2,
      strokeColor: "#c4f946"
    },
    area: {
      gradientFrom: "#7281a7",
      gradientFromOpacity: 0.4,
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
    // tooltip:{
    //     visible: true,
    //     textFormatter: v => v.toFixed(0),
    //     lineColor: "#777",
    //     lineWidth: 1,
    //     circleColor: "#fff",
    //     circleBorderColor: "#fff",
    //     circleBorderWidth: 1,
    //     boxColor: "transparent",
    //     boxBorderWidth: 1,
    //     boxBorderColor: "#777",
    //     boxBorderRadius: 5,
    //     boxPaddingY: 0,
    //     boxPaddingX: 0,
    //     textColor: "white",
    //     textFontSize: 10
    // },
    interpolation: "none",
    backgroundColor: "transparent",
  };

  const config2 = {
    line: {
      strokeWidth: 3,
      strokeColor: "white"
    },
    area: {
      gradientFrom: "#7d7fd7",
      gradientFromOpacity: 1,
      gradientTo: "#7d7fd7",
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

export default class DoubleLineChart extends Component {
  render() {
    return (
      <View style={styles.container}>
            <LineChart style={styles.chart} config={config2} data={data2} /> 
            <LineChart style={styles.chart} config={config1} data={data1} /> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor:'black',
        flex:1,
       alignItems:'center',
       justifyContent:'center'
    },
    chart: {
    height:'100%',
    width:'100%',
    position: 'absolute',
    backgroundColor:'transparent',
        }
  });
