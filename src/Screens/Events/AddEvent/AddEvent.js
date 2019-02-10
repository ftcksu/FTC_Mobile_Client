import React, { Component } from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import FTCSyteledText from '../../../components/FTCStyledText'
import { MaxParticipants } from './MaxParticipants'
import { InputFields } from './InputFields'
import { AttendToggle } from './AttendToggle'
import { CurrentParticipants } from './CurrentParticipants';
import { NotifiCheck } from './NotifiCheck'
import { SubmitButton } from './SubmitButton'
import { AutocompleteEventParticipants } from './AutocompleteEventParticipants'
import data from '../../../dummy_data/autocompleteData.json'

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
    return (
      <View style={styles.inputSection}>
        <InputFields />
        <MaxParticipants />
        <AutocompleteEventParticipants members={data} />
        <CurrentParticipants />
        {this.renderAttendToggle()}
        {this.renderNotifiCheck()}
        {this.renderSubmitButton()}
      </View>
    )
  }

  renderAttendToggle() {
    return (
      <AttendToggle
        firstButton={'التسجيل للحضور فقط'}
        secondButton={'نحتاج منظمين'}
      />
    )
  }

  renderNotifiCheck() {
    return (
        <NotifiCheck />
    )
  }

  renderSubmitButton() {
    return (
      <TouchableOpacity onPress={() => console.log('submit')}>
        <SubmitButton />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <ScrollView style={styles.container} >
        {this.rednerHeader()}
        {this.renderInputSection()}
        {/* Sorry for the bad component! */}
      </ScrollView>
    )
  }
}

const styles = {
  container: {
    width: '90%',
    alignSelf: 'center',
  },
  headerText: {
    fontSize: 28,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 10,
    fontFamily: "Cairo-Bold",
  },
  inputSection: {
    flex: 2,
  },
  attendToggle: {
    flex: 1,
  },
  submitButton: {
    flex:1,
  },
  notifiCheck: {
    flex: 1,
  },
}
