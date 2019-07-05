import React, { Component } from 'react'
import { View} from 'react-native'
import { ScreenWithHeader, InputWithTitle, DatePicker, AutocompleteEventParticipants, CurrentParticipants, GradientButton, AttendToggle, NotifiCheck, FloatingActionButton } from '../components'
import { getAllUsers, showNetworkErrorMessage, showMessage, addEvent } from '../global'
import images from '../../assets/images';

export class EventForm extends Component {

  componentDidMount() {
  this.fetchUsers()
  if(this.props.navigation && this.props.navigation.state.params){ // means that user should see edit event not add
    this.setState(this.props.navigation.state.params.event)
    this.setState({registered_users:this.props.navigation.state.params.users})
    this.setState({user_limit:this.props.navigation.state.params.event.user_limit+""}) //casting from int to string
  }
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
      if(this.state.id){
        this.patchEvent();
      }else
        this.addEvent()
    }
  }

  addEvent = () =>{
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

  patchEvent = () =>{

  }

  deleteEvent = () =>{
    
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
  handelEventDelete = () =>{
    
  }

  render() {
    const title = (this.state.id ? "عدل على مشروعك" : "اضف مشروعك")
    const autocompleteTitle = (this.state.id ? "اضف مشاركين" : "اسماء المشاركين مبدئياً")
    return (
      <View style={{flex:1}} >
        <ScreenWithHeader onPressBack={this.handelBackButtonPress} titleStyle={styles.headerTitle} hasScrollView={true}  title={title} >
          <View style={styles.container} >
            <InputWithTitle containerStyle={styles.inputContainer} value={this.state.name}  onChangeText={(text => this.setState({name:text}))} title={'اسم المشروع'} placeholder={'اجباري'} />
            <InputWithTitle containerStyle={styles.inputContainer} value={this.state.description} onChangeText={(text => this.setState({description:text}))} title={'وصف المشروع'} placeholder={'اجباري'} />
            <InputWithTitle containerStyle={styles.inputContainer} value={this.state.whatsapp_link} onChangeText={(text => this.setState({whatsapp_link:text}))} title={'رابط قروب الواتس اب'} placeholder={'اختياري'} />
            <InputWithTitle containerStyle={styles.inputContainer} title={'تاريخ المشروع'}>
              <DatePicker value={this.state.date} onDateSelection={(date) => this.setState({date:date})} /> 
            </InputWithTitle>
            <InputWithTitle value={this.state.user_limit} containerStyle={styles.inputContainer} keyboardType={'decimal-pad'} onChangeText={(text => this.setState({user_limit:text}))} value={this.state.user_limit} title={'الحد الأعلى للمشاركين'} placeholder={'اجباري، لا تحسب نفسك'} />
            <AutocompleteEventParticipants title = {autocompleteTitle} containerStyle={styles.inputContainer} users={this.state.users} onEnrollUser={this.onEnrollUser} enrolledUsers={this.state.registered_users} />
            <CurrentParticipants containerStyle={styles.inputContainer} onRemovedEnrolledUser={this.onRemovedEnrolledUser} enrolledUsers={this.state.registered_users} />
            { !this.state.id ? ( // if there isn't id then this is add event
              <View>
                <AttendToggle containerStyle={styles.inputContainer} firstButton={'التسجيل للحضور فقط'} secondButton={'نحتاج منظمين'} onPress={this.onTypeEventChange} />
                <NotifiCheck checked={this.state.notify} onCheck={this.handelNotifyPress} />
              </View>
            ) : null}
            <GradientButton onPress={this.onSubmit} style={styles.submitButton} title={'أرسل'} />
          </View>
        </ScreenWithHeader>
        {this.state.id ? <FloatingActionButton onPress={this.handelEventDelete} colors={['#b30000','#ff4d4d']} icon={images.garbage} /> : null}
      </View>
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
    marginTop:10
  }
}
