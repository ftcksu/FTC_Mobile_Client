import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import PointPerDayCard from './PointPerDayCard'
import ScreenBackground from '../ScreenBackground'


export default class History extends Component {
  render() {
    return (
      <View style={styles.container} >
        <ScreenBackground style={{ position: 'absolute', top:0,height:"100%" }} />
        <PointPerDayCard />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    // height:"100%",
    // width:"100%",
    alignItems:'center',
     justifyContent:"center",

  },
});