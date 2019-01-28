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
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 900,
    borderTopWidth: 100,
    borderRightColor: 'transparent',
    borderTopColor: 'white',
    marginBottom:-0.1, // react native in a nutshell
    transform: [
      {rotate: '180deg'}
    ]
  },
  inputContainer2:{
    height:'40%',
    width:'100%',
    backgroundColor:'white'
  }
});