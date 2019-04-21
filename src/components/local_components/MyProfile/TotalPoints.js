import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import FTCStyledText from '../../shared_components/FTCStyledText'
import Pulse from 'react-native-pulse';


export default class TotalPoints extends Component {
  render() {
    return (
      <View style={styles.TextContainer}>
        <Pulse color='white' numPulses={3} diameter={200} speed={20} duration={2000} />
        <FTCStyledText style={styles.text} > 254 </FTCStyledText>
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