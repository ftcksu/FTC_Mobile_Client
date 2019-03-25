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
  { id: 1, first_name:'عبدالمحسن', last_name:'العنزي' },
  { id: 2, first_name:'باسل', last_name:'العبدلي' },
  { id: 3, first_name:'نواف', last_name:'الكعيد' },
  { id: 4, first_name:'عبدالاله', last_name:'النمي' }
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
    attendOnly: 1,
    sendNotification: false,
    submit: 0, // or can pass a callback function, invoked by pressing "submit"
  }

  componentDidMount() {
    this._getInfo()
  }

  // add item to CurrentParticipants[], remove item from members[]
  // and adjust number of max participants as participants are added
  _handleAddingParticipant = (item) => {
    const { maxPart, participants } = this.state
    // if participants.length > maxPart => maxPart = length(participants)
    max = maxPart

    if (participants.length >= max) {
      max = participants.length + 1
    }

    let filteredArray = this.state.members.filter(i => i.id !== item.id)

    this.setState({
      participants: [...participants, item],
      maxPart: max,
      members: filteredArray,
    })
  }

  // remove from currecntParticipants[] and add to memebers[]
  _handleRemovingParticipant = (item) => {
    let filteredArray = this.state.participants.filter(i => i.id !== item.id)
    filteredArray.forEach(j => console.log(j)) 
    this.setState({ 
      participants: filteredArray,
      members: [...this.state.members, item],
    })
  }

  _getInfo = () => {
    this.setState({
      participants: items, // connect to endpoint
      members: data, // also connect to endpoint
    })
  }

  updateState = (new_state) => {
    console.log('updateState')
    console.log(new_state)
    this.setState(new_state)
  }

  submitEvent = () => {
    // post data to backend here.
    const { 
      eventName, eventDsv, whatsAppLink,
      eventDate, maxPart, participants,
      attendOnly, sendNotification
    } = this.state
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
    // I'm a CS student, what do I know.
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
          // add participant
          updateState={(item) => this._handleAddingParticipant(item)}
        />
        <CurrentParticipants
          items={this.state.participants}
          updateState={(item) => this._handleRemovingParticipant(item)}
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
        selectedIndex={this.state.attendOnly}
        updateState={(state) => this.updateState({ attendOnly: state })}
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
      <SubmitButton submit={() => this.submitEvent()} />
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
