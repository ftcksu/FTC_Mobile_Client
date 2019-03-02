import React, { Component } from 'react'
import { View } from 'react-native'
import { Input } from 'react-native-elements'
import { inputFieldStyle } from "../../../styles/inputFieldStyle";
import { DatePicker } from './DatePicker'

export class InputFields extends Component {
  // states:
    // eventName
    // eventDsc
    // whatsAppLink
  render() {
    const {
      inputContainerStyle, inputStyle
    } = inputFieldStyle
    return (
      <View>
        <Input
          placeholder={'اسم المشروع'}
          inputContainerStyle={inputContainerStyle}
          containerStyle={styles.containerStyle}
          inputStyle={inputStyle}
          onChangeText={t => this.props.updateState({ eventName: t })}
        />
        <Input
          placeholder={'وصف المشروع'}
          multiline={true}
          inputContainerStyle={inputContainerStyle}
          containerStyle={styles.containerStyle}
          inputStyle={inputStyle}
          onChangeText={t => this.props.updateState({ eventDsc: t })}
        />
        <Input
          placeholder={'رابط قروب الواتس اب'}
          inputContainerStyle={inputContainerStyle}
          containerStyle={styles.containerStyle}
          inputStyle={inputStyle}
          onChangeText={t => this.props.updateState({ whatsAppLink: t })}
          textContentType={'URL'}
        />
        <DatePicker 
          date={this.props.date}
          updateState={d => this.props.updateState({ eventDate: d })} // I don't want to think I'm tired!
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
    ...inputFieldStyle.containerStyle,
    alignSelf: 'center',
    width: '110%', // why is this working?
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
