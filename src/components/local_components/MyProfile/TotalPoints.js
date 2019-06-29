import React, { Component } from 'react'
import {View, StyleSheet } from 'react-native'
import { FTCStyledText } from '../../'
import Pulse from 'react-native-pulse';


export class TotalPoints extends Component {
  render() {
    return (
      <View style={styles.TextContainer}>
        <Pulse color='white' numPulses={3} diameter={200} speed={20} duration={2000} />
        <FTCStyledText style={styles.text} > {this.props.points} </FTCStyledText>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    TextContainer:{
        width: 120,
        height: 120,
        borderRadius: 120/2,
        justifyContent: 'center',
        backgroundColor:'white',
        alignItems:'center'
        },
    text:{
        fontFamily: 'Cairo-Bold',
        fontSize: 40
    }
  });