import React, { Component } from 'react'
import { Text } from 'react-native'
import { ButtonGroup } from 'react-native-elements'

export class AttendToggle extends Component {
  state = {
    selectedIndex: 1
  }

  updateIndex(selectedIndex) {
    console.log(selectedIndex)
    this.setState({ selectedIndex })
  }

  render() {
    const buttons = [
      <Text style={styles.buttonText}>{'نحتاج منظمين'}</Text>,
      <Text style={styles.buttonText}>{'التسجيل للحضور فقط'}</Text>
    ]
    return (
      <ButtonGroup
        onPress={(index) => this.updateIndex(index)}
        selectedIndex={this.state.selectedIndex}
        buttons={buttons}
        containerStyle={styles.buttonContainerStyle}
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
    borderRadius: 0,
    backgroundColor: '#eeeeee'
  }
}