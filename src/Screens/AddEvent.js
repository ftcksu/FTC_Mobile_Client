import React, { Component } from 'react'
import { View, ScrollView, KeyboardAvoidingView} from 'react-native'
import { ScreenWithHeader, InputWithTitle, DatePicker, AutocompleteEventParticipants, CurrentParticipants, GradientButton, AttendToggle, NotifiCheck } from '../components'
import { getAllUsers, showNetworkErrorMessage, showMessage, addEvent } from '../global'
export class AddEvent extends Component {

  componentDidMount() {
  this.fetchUsers()
}
  state = {
    'users':[],
    'name':'',
    'description':'',
    'whatsapp_link':'',
    'date':new Date(),
    'user_limit':'',
    'type':'ATTEND', 
    'registered_users':[],
    'notify':false
  }

  fetchUsers = () => {
    getAllUsers().then(response => {
      if(response.status == 200)
        this.setState({users:response.data})
      else
      showNetworkErrorMessage(this.props.navigation) //TODO:ADD NAVIGATOR AS PARAM
    }).catch(error => console.log(error))
  }

  onEnrollUser = (user) =>{
    this.setState({registered_users:[...this.state.registered_users, user]})

    if(this.state.registered_users.length+1 >= this.state.user_limit)
      this.setState({user_limit:this.state.registered_users.length+1+""})
  }
  onRemovedEnrolledUser = (enrolledUser) =>{
    const newList = this.state.registered_users.filter(user => user.id != enrolledUser.id)
    this.setState({registered_users: newList})
  }

  onTypeEventChange = (newEventTypeEnum) => {
    if(newEventTypeEnum == 0)
    this.setState({type:'ORGANIZE'})
    else
      this.setState({type:'ATTEND'})
  }

  onSubmit = () => {
    if(this.validateUserInput()){
      addEvent(this.state).then(response => {
        console.log(response);
        if(response.status == 201){
          showMessage('كفووو', 'ابشرك اضفنا مشروعك عاد الله الله بالشغل السنع', 'ابشر طال عمرك')
        }else{
          showNetworkErrorMessage();
          console.log(response);
        }
      }).catch(error => {showNetworkErrorMessage(); console.log(error);})
    }
  }

  validateUserInput(){
    const {name, description, user_limit, type, date} = this.state;
    console.log(name, description, user_limit, type, date);
    const nameRules = name && (name.length >= 5 && name.length <= 30)
    const descriptionRules = description && (description.length > 15 && description.length < 200)
    console.log(Boolean(user_limit), Number.isInteger(+user_limit),(this.state.registered_users.length <= Number.parseInt(user_limit)));
    const userLimitRules = Boolean(user_limit) && Number.isInteger(+user_limit) && (this.state.registered_users.length <= Number.parseInt(user_limit))
    console.log(userLimitRules);
    const typeRules = (type == 'ATTEND' || type == 'ORGANIZE')

    let errorMessage = '';
    if(!nameRules){
      errorMessage=errorMessage+ '\n'+ '*اسم المشروع لازم يكون بين 5 و 30 حرف عزيزي'
    }
    if(!descriptionRules){
      errorMessage=errorMessage+ '\n'+ '*وصف المشروع لازم يكون بين 15 و 200 حرف'
    }
    if(!userLimitRules){
      errorMessage=errorMessage+ '\n'+ '*لازم تحط عدد اقصى للمشاركين'
    }
    if(!typeRules){
      errorMessage=errorMessage+ '\n'+ '*اختر نوع الفعالية'
    }
    if(errorMessage.length){
      showMessage(undefined, errorMessage, 'ابشر طال عمرك')
      return false
    }
    return true;
  }

  handelBackButtonPress = () =>{
    this.props.navigation.pop();
  }
  handelNotifyPress = () =>{
    this.setState({notify:!this.state.notify})
  }

  render() {
    return (
      <ScreenWithHeader onPressBack={this.handelBackButtonPress} titleStyle={styles.headerTitle} hasScrollView={true}  title={'اضف مشروعك'} >
        <View style={styles.container} >
          <InputWithTitle containerStyle={styles.inputContainer} value={this.state.name}  onChangeText={(text => this.setState({name:text}))} title={'اسم المشروع'} placeholder={'اجباري'} />
          <InputWithTitle containerStyle={styles.inputContainer} value={this.state.description} onChangeText={(text => this.setState({description:text}))} title={'وصف المشروع'} placeholder={'اجباري'} />
          <InputWithTitle containerStyle={styles.inputContainer} value={this.state.whatsapp_link} onChangeText={(text => this.setState({whatsapp_link:text}))} title={'رابط قروب الواتس اب'} placeholder={'اختياري'} />
          <InputWithTitle containerStyle={styles.inputContainer} title={'تاريخ المشروع'}>
            <DatePicker value={this.state.date} onDateSelection={(date) => this.setState({date:date})} /> 
          </InputWithTitle>
          <InputWithTitle containerStyle={styles.inputContainer} keyboardType={'decimal-pad'} onChangeText={(text => this.setState({user_limit:text}))} value={this.state.user_limit} title={'الحد الأعلى للمشاركين'} placeholder={'اجباري، لا تحسب نفسك'} />
          <AutocompleteEventParticipants containerStyle={styles.inputContainer} users={this.state.users} onEnrollUser={this.onEnrollUser} enrolledUsers={this.state.registered_users} />
          <CurrentParticipants containerStyle={styles.inputContainer} onRemovedEnrolledUser={this.onRemovedEnrolledUser} enrolledUsers={this.state.registered_users} />
          <AttendToggle containerStyle={styles.inputContainer} firstButton={'التسجيل للحضور فقط'} secondButton={'نحتاج منظمين'} onPress={this.onTypeEventChange} />
          <NotifiCheck checked={this.state.notify} onCheck={this.handelNotifyPress} />
          <GradientButton onPress={this.onSubmit} style={styles.submitButton} title={'أرسل'} />
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
  headerTitle:{
    fontSize:26
  },
  inputContainer:{
    marginTop:10
  },
  submitButton:{
    margin:10
  }
}
