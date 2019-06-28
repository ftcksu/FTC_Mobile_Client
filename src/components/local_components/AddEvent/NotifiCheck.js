import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { CheckBox } from 'react-native-elements/src/index'
import {TouchableOpacity } from 'react-native-gesture-handler';

export class NotifiCheck extends Component {
  // sendNotification
  render() {
    const { containerStyle, textStyle } = styles
    return (
      <TouchableOpacity
      onPress={() => this.props.updateState(!this.props.sendNotification)}>
        <CheckBox
          right
          title='تبى ترسل تنبيه لكل الأعضاء؟'
          iconRight
          checkedColor='#868686'
          checked={this.props.sendNotification}
          fontFamily={'Cairo-Bold'}
          containerStyle={containerStyle}
          />
      </TouchableOpacity>
      
    )
  }
}

const styles = {
  containerStyle: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  textStyle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 12,
  }
}