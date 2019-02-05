import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { CheckBox } from 'react-native-elements'

export class NotifiCheck extends Component {
  state = {
    checked: false,
  }

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
        onIconPress={() => this.setState({ checked: !this.state.checked })}
        checkedColor='#868686'
        checked={this.state.checked}
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