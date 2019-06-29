import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import {FTCStyledText} from '../../'

export class TaskCard extends Component {
  render() {
    return (
      <View style={styles.container} >
        <FTCStyledText style={styles.text}>{this.props.description}</FTCStyledText>
        <FTCStyledText style={styles.textBullet}>{'\u2B24'}</FTCStyledText> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        width:"100%",
       justifyContent:"space-evenly",
       flexDirection:'row',
    },
    text:{
        alignSelf:'center',
        fontFamily:'Cairo-Bold',
        fontSize:13,
        color:'white',
        flexDirection: 'column',
        textAlign:'right',
        flex: 0.9
    },
    textBullet:{
      fontFamily:'Cairo-Bold',
      fontSize:9,
      marginTop:7,
      color:'white',
    }
  });