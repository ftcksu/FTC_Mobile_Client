import React, { Component } from 'react'
import { View, ScrollView, KeyboardAvoidingView} from 'react-native'
import { ScreenWithHeader, InputWithTitle, DatePicker, AutocompleteEventParticipants, CurrentParticipants, GradientButton, AttendToggle, NotifiCheck } from '../components'
import { getAllUsers, showNetworkErrorMessage, showErrorMessage } from '../global'
export class AddEvent extends Component {

  componentDidMount() {
  this.fetchUsers()
}
  state = {
    'users':[],
    'name':'',
    'description':'',
    'whatsAppURL':'',
    'date':new Date(),
    'user_limit':'',
    'registered_users':[],
    'eventType':0,
    'notify':false
  }

  fetchUsers = () => {
    getAllUsers().then(response => {
      console.log(response);
      if(response.status == 200)
        this.setState({users:response.data})
      else
      showNetworkErrorMessage() //TODO:ADD NAVIGATOR AS PARAM
    }).catch(error => console.log(error))
  }

  onEnrollUser = (user) =>{
    this.setState({registered_users:[...this.state.registered_users, user]})
    console.log(this.state.registered_users);
  }
  onRemovedEnrolledUser = (enrolledUser) =>{
    const newList = this.state.registered_users.filter(user => user.id != enrolledUser.id)
    this.setState({registered_users: newList})
  }

  onSubmit =()=>{

  }
  handelBackButtonPress = () =>{
    this.props.navigation.pop();
  }
  handelNotifyPress = () =>{
    console.log('handelNotifyPress ', this.state.notify);
    this.setState({notify:!this.state.notify})
  }

  render() {
    return (
      <ScreenWithHeader onPressBack={this.handelBackButtonPress} titleStyle={{fontSize:26}} hasScrollView={true}  title={'اضف مشروعك'} >
        <View style={styles.container} >
          <InputWithTitle containerStyle={styles.inputContainer} onChangeText={(text => this.setState({name:text}))} title={'اسم المشروع'} placeholder={'اجباري'} />
          <InputWithTitle containerStyle={styles.inputContainer} onChangeText={(text => this.setState({description:text}))} title={'وصف المشروع'} placeholder={'اجباري'} />
          <InputWithTitle containerStyle={styles.inputContainer} onChangeText={(text => this.setState({whatsAppURL:text}))} title={'رابط قروب الواتس اب'} placeholder={'اختياري'} />
          <InputWithTitle containerStyle={styles.inputContainer} title={'تاريخ المشروع'}>
            <DatePicker/> 
          </InputWithTitle>
          <InputWithTitle containerStyle={styles.inputContainer} keyboardType={'decimal-pad'} onChangeText={(text => this.setState({name:text}))} title={'الحد الأعلى للمشاركين'} placeholder={'اجباري، لا تحسب نفسك'} />
          <AutocompleteEventParticipants containerStyle={styles.inputContainer} users={this.state.users} onEnrollUser={this.onEnrollUser} enrolledUsers={this.state.registered_users} />
          <CurrentParticipants containerStyle={styles.inputContainer} onRemovedEnrolledUser={this.onRemovedEnrolledUser} enrolledUsers={this.state.registered_users} />
          <AttendToggle containerStyle={styles.inputContainer} firstButton={'التسجيل للحضور فقط'} secondButton={'نحتاج منظمين'} onPress={(index) => this.setState({eventType:index})} />
          <NotifiCheck checked={this.state.notify} onCheck={this.handelNotifyPress} />
          <GradientButton style={styles.submitButton} title={'أرسل'} />
        </View>
      </ScreenWithHeader>
    )
  }
}
styles = {
  container : {
    backgroundColor:'white',
    flex:1,
    padding:8,
  },
  headerStyle:{
    flex:1
  },
  inputContainer:{
    marginTop:10
  },
  submitButton:{
    margin:10
  }
}
