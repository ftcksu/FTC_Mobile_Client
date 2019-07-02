import React, { Component } from 'react'
import { View, ScrollView, KeyboardAvoidingView } from 'react-native'
import { FTCStyledText, MaxParticipants, InputFields, AttendToggle, CurrentParticipants, NotifiCheck, SubmitButton, AutocompleteEventParticipants } from '../components'
import { getAllUsers } from '../global'
import { SafeAreaView } from 'react-navigation';

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
  _handleAddingParticipant = (addedUser) => {
    const { maxPart, participants } = this.state
    // if participants.length > maxPart => maxPart = length(participants)
    max = maxPart

    if (participants.length >= max) {
      max = participants.length + 1
    }

    let filteredArray = this.state.members.filter((user) =>{
        if(addedUser.id != user.id)
          return user
    } )

    this.setState({
      participants: [...participants, addedUser],
      maxPart: max,
      members: filteredArray,
    })
  }

  // remove from currecntParticipants[] and add to memebers[]
  _handleRemovingParticipant = (item) => {
    let filteredArray = this.state.participants.filter(i => i.id !== item.id)
    this.setState({ 
      participants: filteredArray,
      members: [...this.state.members, item],
    })
  }

  _getInfo = () => {
    getAllUsers().then(response => {
      if(response.status == 200 ){
        this.setState({
          participants: [], // connect to endpoint
          members: response.data,       // also connect to endpoint
          
        })
      }
    })
  }

  updateState = (new_state) => {
    this.setState(new_state)
  }

  submitEvent = () => {
    // post data to backend here.
    // if success, navigate to events screen
    // if failure, show alert, do not reset fields
    const { 
      eventName, eventDsc, whatsAppLink,
      eventDate, maxPart, participants,
      attendOnly, sendNotification
    } = this.state

    console.log({
      'event name': eventName,
      'event description': eventDsc, 
      'whatsapp link': whatsAppLink,
      'date': eventDate, 
      'maximum number of participants': maxPart, 
      'participating membbers': participants,
      'attend only?': attendOnly, 
      'send notification?': sendNotification
    })
  }


  renderHeader() {
    return (
      <FTCStyledText style={styles.headerText} >
        {'إضافة مشروع'}
      </FTCStyledText>
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
        {this.renderManageParticipants()}
        {this.renderAttendToggle()}
        {this.renderNotifiCheck()}
        {this.renderSubmitButton()}
      </View>
    )
  }

  renderManageParticipants(){
    return (
        <View style={{zIndex:1}} >
          <AutocompleteEventParticipants
            members={this.state.members}
            updateState={(item) => this._handleAddingParticipant(item)}
          />
          {this.state.participants.length ? <CurrentParticipants
            items={this.state.participants}
            updateState={(item) => this._handleRemovingParticipant(item)}
          /> : null}
      </View>
    )
  }

  renderAttendToggle() {
    return (
      <AttendToggle
        style={styles.attendToggle}
        firstButton={'التسجيل للحضور فقط'}
        secondButton={'نحتاج منظمين'}
        selectedIndex={this.state.attendOnly}
        onPress={(state) => this.updateState({ attendOnly: state })}
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
      <SubmitButton style={styles.submitButton} submit={() => this.submitEvent()} />
    )
  }

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',}} behavior="height" enabled>
          <ScrollView  style={styles.container} >
            <SafeAreaView>
            {this.renderHeader()}
            {this.renderInputSection()}
            {/* Sorry for the bad component! */}
          </SafeAreaView>
          </ScrollView>
      </KeyboardAvoidingView>
      
    )
  }
}

const styles = {
  container: {
    flex:1,
    width:'100%',
    paddingRight:20,
    paddingLeft:20,
    alignSelf: 'center',
    // justifyContent:'space-around'
  },
  headerText: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 10,
    fontFamily: "Cairo-Bold",
  },
  inputSection: {
    flex: 2,
  },
  attendToggle: {
    flex: 1,
    marginTop:8,
  },
  submitButton: {
    
  },
  notifiCheck: {
    flex: 1,
  },
}
