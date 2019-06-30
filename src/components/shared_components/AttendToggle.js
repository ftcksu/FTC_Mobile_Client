import React, { Component } from 'react'
import { Text } from 'react-native'
import { ButtonGroup } from 'react-native-elements/src/index'

export class AttendToggle extends Component {

  state = {
    selectedIndex:0
  }

  _handelPress = (index) => {
    this.setState({
      selectedIndex:index
    })
    this.props.onPress(index)
  }
  render() {
    const buttons = [
      <Text style={styles.buttonText}>{this.props.secondButton}</Text>,
      <Text style={styles.buttonText}>{this.props.firstButton}</Text>
    ]
    return (
      <ButtonGroup
        onPress={(index) => this.props.onPress(index)}
        selectedIndex={this.props.selectedIndex}
        buttons={buttons}
        containerStyle={[styles.buttonContainerStyle, this.props.style]}
      />
    )
  }
}

const styles = {
  buttonText: {
    fontFamily: 'Cairo-Bold',
    fontSize: 12,
  },
  buttonContainerStyle: {
    alignSelf: 'center',
    width: '100%',
    borderRadius: 0,
    backgroundColor: '#eeeeee',
    borderRadius:10
  }
}