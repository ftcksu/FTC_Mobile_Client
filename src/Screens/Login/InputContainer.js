import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

export default class InputContainer extends Component {
  render() {
    return (
      <View style={this.props.style} >
        <View style={styles.inputContainer1}/>
        <View style={styles.inputContainer2} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  inputContainer1:{
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderRightWidth: 600,
    borderTopWidth: 70,
    borderRightColor: 'transparent',
    borderTopColor: 'white',
    marginBottom:-0.1, // react native in a nutshell
    transform: [
      {rotate: '180deg'}
    ]
  },
  inputContainer2:{
    height:'100%',
    width:'100%',
    backgroundColor:'white'
  }
});