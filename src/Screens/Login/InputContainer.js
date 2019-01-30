import React, { Component } from 'react'
import { View } from 'react-native'
import { Input } from 'react-native-elements'
import { inputFieldStyle } from "../../styles/inputFieldStyle"
    const {
      inputContainerStyle, containerStyle, inputStyle
    } = inputFieldStyle;
export default class InputContainer extends Component {
  render() {
    return (
      <View style={this.props.style} >
      <View style={{position:'absolute',height:'100%'}} >
        <View style={styles.inputContainer1}/>
        <View style={styles.inputContainer2} />
      </View>
      <Input
          placeholder={'اسم المشروع'}
          inputContainerStyle={inputContainerStyle}
          containerStyle={[containerStyle,{marginTop:150}]}
          inputStyle={inputStyle}
        />
      </View>
    )
  }
}
const styles = {
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
};