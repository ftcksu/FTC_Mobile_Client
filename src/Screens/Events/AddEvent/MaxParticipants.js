import React, { Component } from 'react'
import { View } from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown'

/* 
    SHOULD THIS BE A FUNCTIONAL COMPONENT?
    Also, need some hooking up with Redux.
*/

export class MaxParticipants extends Component {

  renderNumOfParti() {
    let list = []
    for (i = 1; i <= 60; i++) {
      list.push(i)
    }
    return list
  }

  render() {
    const { 
      buttonStyle, buttonTextStyle, dropdownStyle
    } = styles
    return (
      <ModalDropdown
        options={this.renderNumOfParti()}
        defaultValue='الحد الأعلى للمشاركين'
        style={buttonStyle}
        textStyle={buttonTextStyle}
        dropdownStyle={dropdownStyle}
        onSelect={(index, value) => console.log(value)}
      />
    )
  }
}

const styles = {
  buttonStyle: {
    marginLeft: 18,
    marginRight: 18,
    backgroundColor: '#eeeeee',
    height: 40,
    justifyContent: 'center'
  },
  buttonTextStyle: {
    textAlign: 'right',
    fontFamily: 'Cairo-Bold',
    color: '#bababf', // Magic
    fontSize: 14,
    paddingRight: 15
  },
  dropdownStyle: {
    width: 50,
    height: 300,
  }
}
