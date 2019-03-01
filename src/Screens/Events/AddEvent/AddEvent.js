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

const items = [
  { id: 1, name: 'باسل العبدلي' },
  { id: 2, name: 'عبدالمحسن العنزي' },
  { id: 3, name: 'نواف الكعيد' },
  { id: 4, name: 'عبدالاله النمي' }
]

export class AddEvent extends Component {

  state = {
    eventName: '',
    eventDsc: '',
    whatsAppLink: '',
    eventDate: 'تاريخ المشروع', // what type?
    maxPart: 0,
    members: [],
    participants: [],
    attendToggle: 1,
    sendNotification: false,
    submit: 0, // or can pass a callback function, invoked by pressing "submit"
  }

  componentDidMount() {
    this._getInfo()
  }

  _getInfo = () => {
    this.setState({
      participants: items, // connect to endpoint
      members: data, // also connect to endpoint
    })
  }

  updateState = (new_state) => {
    this.setState(new_state)
  }

  _submitEvent = () => {
    console.log(this.state)
  }


  rednerHeader() {
    return (
      <FTCSyteledText style={styles.headerText} >
        {'إضافة مشروع'}
      </FTCSyteledText>
    )
  }

  renderInputSection() {
    // because <InputFields> is a bit different,
    // it'll pass the new piece of state directly.
    // I know, I know... hardcoding is bad, but
    // I'm a CS graduate, what do I know.
    return (
      <View style={styles.inputSection}>
        <InputFields
          updateState={(state) => this.updateState(state)}
          date={this.state.eventDate}
        />
        <MaxParticipants
          maxPart={this.state.maxPart}
          updateState={(state) => this.updateState({ maxPart: state })}
        />
        <AutocompleteEventParticipants
          members={this.state.members}
          updateState={(state) => this.updateState({ CurrentParticipants: state })}
        />
        <CurrentParticipants
          items={this.state.participants}
          updateState={(state) => this.updateState({ participants: state })}
        />
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
        selectedIndex={this.state.attendToggle}
        updateState={(state) => this.updateState({ attendToggle: state })}
      />
    )
  }

  renderNotifiCheck() {
    return (
      <NotifiCheck
        sendNotification={this.state.sendNotification}
        updateState={(state) => this.updateState({ sendNotification: state })}
      />
    )
  }

  renderSubmitButton() {
    return (
      <SubmitButton submit={() => this._submitEvent()} />
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
    flex: 1,
  },
  notifiCheck: {
    flex: 1,
  },
}
