import React, { Component } from 'react'
import { View } from 'react-native'
import { Input } from 'react-native-elements'

export class InputFields extends Component {
  render() {
    const {
      inputContainerStyle, containerStyle, inputStyle
    } = styles
    return (
      <View>
        <Input
          placeholder={'اسم المشروع'}
          inputContainerStyle={inputContainerStyle}
          containerStyle={containerStyle}
          inputStyle={inputStyle}
        />
        <Input
          placeholder={'وصف المشروع'}
          inputContainerStyle={inputContainerStyle}
          containerStyle={containerStyle}
          inputStyle={inputStyle}
        />
        <Input
          placeholder={'تاريخ المشروع'}
          inputContainerStyle={inputContainerStyle}
          containerStyle={containerStyle}
          inputStyle={inputStyle}
        />
        <Input
          placeholder={'رابط قروب الواتس اب'}
          inputContainerStyle={inputContainerStyle}
          containerStyle={containerStyle}
          inputStyle={inputStyle}
        />
      </View>
    )
  }
}

const styles = {
  /*
  for more information about
  containerStyle and inputContainerStyle, visit:
  https://react-native-training.github.io/react-native-elements/img/input_with_explanation.png
  */
  containerStyle: {
    alignSelf: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  // text input field style.
  inputContainerStyle: {
    marginBottom: 15,
    paddingRight: 15,
    paddingLeft: -15,
    alignSelf: 'center',
    backgroundColor: '#eeeeee',
    borderBottomWidth: 0,

  },
  inputStyle: {
    fontFamily: 'Cairo-Bold',
    textAlign: 'right',
    fontSize: 14,
    color: '#868686'
  },
}