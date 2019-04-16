import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Input } from 'react-native-elements/src/index'
import { inputFieldStyle } from "../../../global/styles/inputFieldStyle"
    const {
      inputContainerStyle, containerStyle, inputStyle
    } = inputFieldStyle;

export default class componentName extends Component {
  render() {
    return (
      <View>
        <Input
          placeholder={'الرقم الجامعي'}
          inputContainerStyle={inputContainerStyle}
          containerStyle={[containerStyle]}
          inputStyle={inputStyle}
        />
        <Input
          placeholder={'كلمة المرور'}
          inputContainerStyle={inputContainerStyle}
          containerStyle={[containerStyle,{marginTop:20}]}
          inputStyle={inputStyle}
        />
      </View>
    )
  }
}