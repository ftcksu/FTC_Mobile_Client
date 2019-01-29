import React, { Component } from 'react'
import { View, Text } from 'react-native'
import FTCSyteledText from '../../../components/FTCStyledText'
import { MaxParticipants } from './MaxParticipants'
import { InputFields } from './InputFields'
import { AttendToggle } from './AttendToggle'
import { CurrentParticipants } from './CurrentParticipants';

/* Need some work on the naming. */

export class AddEvent extends Component {

  rednerHeader() {
    return (
      <FTCSyteledText style={styles.headerText} >
        {'إضافة مشروع'}
      </FTCSyteledText>
    )
  }
  renderInputSection() {
    const { container } = styles
    return (
      <View style={container}>
        <InputFields />
        <MaxParticipants />
        <CurrentParticipants />
      </View>
    )
  }

  renderAttendToggle() {
    return (
      <AttendToggle />
    )
  }

  render() {
    return (
      <View style={styles.container} >
        {this.rednerHeader()}
        {this.renderInputSection()}
        {this.renderAttendToggle()}
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  headerText: {
    fontSize: 28,
    alignSelf: 'center',
    margin: 10,
    fontFamily: "Cairo-Bold",
  },
}
