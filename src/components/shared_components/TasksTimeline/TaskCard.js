import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import FTCStyledText from '../FTCStyledText'
import { Icon } from 'react-native-elements/src/index';

export class TaskCard extends Component {
  render() {
    return (
      <View style={styles.container} >

        <FTCStyledText style={styles.text} >{this.props.description}</FTCStyledText>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        width:"100%",
       alignItems:'center',
       justifyContent:"space-evenly",
       flexDirection:'row',
    },
    text:{
        alignSelf:'center',
        fontFamily:'Cairo-Bold',
        fontSize:18,
        color:'white',
        // width:'50%'

    },
    icon:{
        // width:'50%'
    }
  });