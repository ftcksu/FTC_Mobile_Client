import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import FTCStyledText from '../../components/FTCStyledText'


export default class TotalPoints extends Component {
  render() {
    return (
      <View style={styles.TextContainer}>
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