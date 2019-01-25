import React, { Component } from 'react'
import { View, Text } from 'react-native'
import FTCSyteledText from '../../../components/FTCStyledText'
import { Input } from 'react-native-elements'


/* Need some work on the naming. */
export class AddEvent extends Component {

  renderInputSection() {
    const { 
      inputContainerStyle, containerStyle,
      container, inputStyle
     } = styles

    return (
      <View style={container}>
        <Input
          placeholder={'اسم المشروع'}
          inputContainerStyle={inputContainerStyle}
          containerStyle={containerStyle}
          inputStyle={inputStyle}
        />
        <Input
          placeholder={'Placeholder2'}
          inputContainerStyle={inputContainerStyle}
          containerStyle={containerStyle}
        />
        <Input
          placeholder={'Placeholder3'}
          inputContainerStyle={inputContainerStyle}
          containerStyle={containerStyle}
        />
        <Input
          placeholder={'Placeholder4'}
          inputContainerStyle={inputContainerStyle}
          containerStyle={containerStyle}
        />
        <Input
          placeholder={'Placeholder5'}
          inputContainerStyle={inputContainerStyle}
          containerStyle={containerStyle}
        />
      </View>
    )
  }

  render() {

    const {
      container, headerText
    } = styles

    return (
      <View style={container} >

        <FTCSyteledText style={headerText} >
          {'إضافة مشروع'}
        </FTCSyteledText>

        {this.renderInputSection()}

      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  // text input container style
  containerStyle: {
    alignSelf: 'center',
    marginLeft: 10,
    marginRight: 10,
    // width: '87%'
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
  headerText: {
    fontSize: 28,
    alignSelf: 'center',
    margin: 10,
    fontFamily: "Cairo-Bold",
  },
  inputStyle: {
    fontFamily: 'Cairo-Bold',
    textAlign: 'right',
    fontSize: 14,
    color: '#868686'
  }
}
