import { CHANGE_TEXT } from './types'

export function setText(text) {
  return ({
    type: CHANGE_TEXT,
    payload: text
  })
}

// componentDidMount() {
//   this._getInfo()
// }

// // add item to CurrentParticipants[], remove item from members[]
// // and adjust number of max participants as participants are added
// _handleAddingParticipant = (addedUser) => {
//   const { maxPart, enrolledUsers } = this.state
//   // if participants.length > maxPart => maxPart = length(participants)
//   max = maxPart

//   if (enrolledUsers.length >= max) {
//     max = enrolledUsers.length + 1
//   }

//   this.setState({
//     enrolledUsers: [...enrolledUsers, addedUser],
//     maxPart: max,
//   })
// }

// // remove from currecntParticipants[] and add to memebers[]
// _handleRemovingParticipant = (userToBeRemoved) => {
//   let newEnrolledUsers = this.state.enrolledUsers.filter(enrolledUser => enrolledUser.id !== userToBeRemoved.id)
//   this.setState({ 
//     enrolledUsers: newEnrolledUsers,
//   })
// }

// _getInfo = () => {
//   getAllUsers().then(response => {
//     if(response.status == 200 ){
//       this.setState({
//         users: response.data,       // also connect to endpoint
//       })
//     }
//   })
// }

// updateState = (new_state) => {
//   this.setState(new_state)
// }

// submitEvent = () => {
//   // post data to backend here.
//   // if success, navigate to events screen
//   // if failure, show alert, do not reset fields
//   const { 
//     eventName, eventDsc, whatsAppLink,
//     eventDate, maxPart, enrolledUsers,
//     attendOnly, sendNotification
//   } = this.state

//   console.log({
//     'event name': eventName,
//     'event description': eventDsc, 
//     'whatsapp link': whatsAppLink,
//     'date': eventDate, 
//     'maximum number of participants': maxPart, 
//     'participating membbers': enrolledUsers,
//     'attend only?': attendOnly, 
//     'send notification?': sendNotification
//   })
// }
