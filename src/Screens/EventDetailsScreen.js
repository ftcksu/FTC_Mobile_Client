import React, { Component } from 'react'
import { View, ScrollView, Alert } from 'react-native'
import { EventLeaderDetails, Participants, GradientButton, ScreenWithHeader } from "../components";
import Images from "../../assets/images";
import { Button } from 'react-native-elements/src/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import { goToWhatsapp, getEventDetails, showNetworkErrorMessage, enrollInEvent } from "../global";
import moment from "moment";

  export class EventDetailsScreen extends Component {

    constructor(props) {
      super(props);
   
      this.state = {
        user_status:props.navigation.state.params.user_status,
         event: {
           id:props.navigation.state.params.id,
           "name": "",
           "whatsapp_link": "",
           "is_leader": false,
           "description": "",
           "user_limit": '',
           "date": "1",
           "status": "",
           "type": ""
         },
         "leader": {
          "first_name": "",
          "last_name": "",
          "phone": "",
          "profilephoto_full_link": "",
          "profilephoto_b64": "",
      },
      "users":[
        {
          "first_name": "",
          "last_name": "",
          "phone": "",
        }
      ]
      }
   }

   componentDidMount(){
    this.fetchEventDetails();
   }

   fetchEventDetails = () =>{
     console.log('event id: ',this.state.event.id);
    getEventDetails(this.state.event.id).then( response =>{
      if(response.status == 200)
        this.setState(response.data);
    }).catch( error =>{
      showNetworkErrorMessage(this.props.navigation)
    })
   }

   enrollInEvent = () => {
    enrollInEvent(this.state.event.id).then(response =>{
      if(response.status == 200){
        Alert.alert(
          'كفو',
          'ابشرك يا الطيب سجلناك الله الله بالشغل',
          [{text: 'ابشر بها' , onPress:() => this.handelBackButtonPress() }]
          );
        return true
      }else
      showNetworkErrorMessage();

    }).catch(error => showNetworkErrorMessage())
   }

    renderWhatsappButton(){
      if(this.state.user_status == 'Registered'  || this.state.user_status == 'Leader' && this.state.event.whatsapp_link)
      return (
        <Button
        onPress={() => goToWhatsapp(this.state.event.whatsapp_link)} //TODO: fix the hard coded number  
          icon={
            <Icon
              style={styles.buttonIcon}
              name="whatsapp"
              size={40}
              color="white"
            />
          }
          iconRight={true}
          buttonStyle={styles.whatsappButton}
          title="قروب المشروع"
          titleStyle={styles.whatsappButtonTitle}
          />
      )
    }

   
    handelBackButtonPress = () =>{
      this.props.navigation.pop();
    }    

    renderLeader(){
      return(
        <EventLeaderDetails style={{margin:15}} eventLeader={this.state.leader} />
      );
    }

    renderParticipants(){
        return(
          <Participants data={this.state.users} />
        );
    }

    renderAppropriateButton() {

      switch(this.state.user_status){
        case 'Lurker': {
          // Register the user in the backend HERE
          // **********************************
          return (
            <GradientButton icon={Images.handShake} style={{alignSelf:'center',marginTop:15}} title="شارك بالتنظيم" onPress={this._handleAppropriateButton}/>
          );
        }
        case 'Registered': {
          return (
              <GradientButton icon={Images.recordPoints} style={{alignSelf:'center',marginTop:15}} title="رصد أعمالي" onPress={this._handleAppropriateButton}/>
          );
        }
        case 'Leader': {
          return (
              <GradientButton icon={Images.recordPoints} style={{alignSelf:'center',marginTop:15}} title="رصد أعمال الفريق" onPress={this._handleAppropriateButton}/>
          );
        }
      }
    }

    _handleAppropriateButton = () => {

      switch(this.state.user_status){
        case 'Lurker': {
          this.enrollInEvent();
          break;
        }
        case 'Registered': {
          this.props.navigation.navigate("RegisterWork");
          break;
        }
        case 'Leader': {
          this.props.navigation.navigate("AcceptMemberWork")
        }
      }
    }


  render() {
    
    return (
      <ScrollView style={{flex:1}} bounces={false}>
        <ScreenWithHeader title={this.state.event.name} 
        subtitle={this.state.event.description}
         bottomIcon={this.state.event.type == 'ORGANIZE' ? Images.organize : Images.attend}
         bottomText={moment(this.state.event.date, 'YYYY-MM-DD').format('MMM DD')}
         onPressBack={this.handelBackButtonPress}>
        <View style={styles.content} >
          {this.renderLeader()}
          {this.renderParticipants()}
          {this.renderWhatsappButton()}
          {this.renderAppropriateButton()}
        </View>
        </ScreenWithHeader>
      </ScrollView>
    )
  }
}
const styles ={
  headerContainer:{
    margin:20,
    marginTop:30,
    alignItems:'center',
    flex:1,
    justifyContent:'space-evenly',
  },
  eventIcon:{
    alignSelf:'flex-start',
    height:35,
    width:35
  },
  cancelIcon: {
    alignSelf:'flex-end',
    height:35,
    width:35
  },
  content: {
    backgroundColor:'white',
    flex:4,
    padding:10
  },
  grid:{
    // alignItems:'center',
    backgroundColor:'#eee'
  },
  buttonIcon:{
    position:'absolute',
    right:10
  },
  whatsappButton:{
    alignSelf:'center',
    backgroundColor:'#2ecc71',
    height:60,
    width: "75%",
    marginTop:15,
    borderRadius:20

  },
  whatsappButtonTitle:{
    fontFamily:'Cairo-Bold'
  }
  
}