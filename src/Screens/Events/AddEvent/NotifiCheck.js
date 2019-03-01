import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { CheckBox } from 'react-native-elements'

export class NotifiCheck extends Component {
  // sendNotification
  render() {
    const { containerStyle, textStyle } = styles
    return (
      <CheckBox
        right
        title='تبى ترسل تنبيه لكل الأعضاء؟'
        iconRight
        iconType='font-awesome'
        checkedIcon='check-square'
        uncheckedIcon='square' //check-box-outline-blank
        onIconPress={() => this.props.updateState(!this.props.sendNotification)}
        checkedColor='#868686'
        checked={this.props.sendNotification}
        fontFamily={'Cairo-Bold'}
        containerStyle={containerStyle}
      />
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