import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { EventLeaderDetails, Participants, GradientButton, ScreenWithHeader } from "../components";
import Images from "../../assets/images";
import { Button } from 'react-native-elements/src/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import { goToWhatsapp, getEventDetails } from "../global";

  export class EventDetailsScreen extends Component {

    constructor(props) {
      super(props);
   
      this.state = {
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
    }).catch( error => console.log(error))
   }

    renderWhatsappButton(){
      return (
        <Button
        onPress={() => goToWhatsapp('966568484248')} //TODO: fix the hard coded number  
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
      console.log(this.state.users);
      return(
        <Participants data={this.state.users} />
      );
    }

    renderAppropriateButton() {

      switch(this.state.event.userStatus){
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

      if(this.state.event.userStatus == 0){
        return (
          <GradientButton icon={Images.handShake} style={{alignSelf:'center',marginTop:15}} title="شارك بالتنظيم" onPress={this._handleAppropriateButton}/>
        );
      } 
      return (

          <GradientButton icon={Images.recordPoints} style={{alignSelf:'center',marginTop:15}} title="رصد أعمالي" onPress={this._handleAppropriateButton}/>

      );
    }

    _handleAppropriateButton = () => {

      switch(this.state.event.userStatus){
        case 'Lurker': {
          // Register the user in the backend HERE
          // **********************************
          this.handelBackButtonPress()
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
      <ScrollView bounces={false}>
        <ScreenWithHeader title={this.state.event.name} subtitle={this.state.event.description} showCalender={true} backFuction={this.handelBackButtonPress}>
        <View style={styles.content} >
          {this.renderLeader()}
          {this.renderParticipants()}
          {this.state.event.userStatus == 1 ? this.renderWhatsappButton() : <View style={[styles.whatsappButton, {backgroundColor: 'white'}]}/> /* to take the same dimensions as the whatsapp button, and keep the bakcground as white */}
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
    justifyContent:'space-evenly'
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
    backgroundColor:'#2ecc71',
    height:75,
    marginTop:15,
    borderRadius:20

  },
  whatsappButtonTitle:{
    fontFamily:'Cairo-Bold'
  }
  
}