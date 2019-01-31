import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import FTCSyteledText from '../../../components/FTCStyledText'
import { MaxParticipants } from './MaxParticipants'
import { InputFields } from './InputFields'
import { AttendToggle } from './AttendToggle'
import { CurrentParticipants } from './CurrentParticipants';
import { NotifiCheck } from './NotifiCheck'
import { SubmitButton } from './SubmitButton'

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

  renderNotifiCheck() {
    return (
      <NotifiCheck />
    )
  }

  renderSubmitButton() {
    return (
      <SubmitButton />
    )
  }

  render() {
    return (
      <ScrollView style={styles.container} >
        {this.rednerHeader()}
        {this.renderInputSection()}
        {this.renderAttendToggle()}
        {this.renderNotifiCheck()}
        {this.renderSubmitButton()}
      </ScrollView>
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
