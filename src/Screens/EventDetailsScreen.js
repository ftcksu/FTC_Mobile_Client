import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
// Commented by Basel 18/06/2019 - Putting the header in a seperate component for reusability.
// import ScreenBackground from "../components/shared_components/ScreenBackground";
// import FTCStyledText from "../components/shared_components/FTCStyledText";
// import { TextStyles } from "../global/styles/TextStyles"
import ScreenWithHeader from "../components/shared_components/ScreenWithHeader";
import Images from "../../assets/images";
import EventLeaderDetails from "../components/local_components/EventDetails/EventLeaderDetails";
import Participants from "../components/local_components/EventDetails/Participants";
import { Button } from 'react-native-elements/src/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import GradientButton from "../components/shared_components/GradientButton";
import data from "../dummy_data/autocompleteData.json";
import { goToWhatsapp } from "../global/actions/appActions";

    // const {
    //   header2, subtitle
    // } = TextStyles;

    
  export class EventDetailsScreen extends Component {

    constructor(props) {
      super(props);
   
      this.state = {
         event: {
           title: "فعالية كيف نشرب شاهي",
           subtitle: "هذه الفعالية تحدف إلى تثقيف عبدالاله ونواف عن ما هو الشهي الكويس والشاهي الخايس",
           userStatus: 'Leader'
         }
      }
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

    // Commented by Basel 18/06/2019 - Putting the header in a seperate component for reusability.

    // renderHeader(){
    //   return(
    //     <View style={styles.headerContainer} >
    //       <TouchableOpacity style={styles.cancelIcon} onPress={this.handelBackButtonPress}>
    //         <Image source={Images.cancel} style={styles.cancelIcon} />
    //       </TouchableOpacity>
    //       <FTCStyledText style={header2} > هاكاثون المستقبل النسخة الثانية</FTCStyledText>
    //       <FTCStyledText style={[subtitle,{marginTop:15, width:'60%'}]} > تطوير حلول تقنية تساعد الملتحقين بالجامعة من طلاب وأعضاء هيئة تدريس </FTCStyledText>
    //       <Image source={Images.calenderIcon} style={styles.eventIcon} />
    //     </View>
    //   )
    // }

    renderLeader(){
      leader = data.filter((item) => {
        return item.isLeader === 1
      })
      return(
        <EventLeaderDetails style={{margin:15}} eventLeader={data[0]} />
      );
    }

    renderParticipants(){
      participants = data.filter((item) => {
        return item.isLeader === 0
      })
      return(
        <Participants participants={participants} />
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
        <ScreenWithHeader title={this.state.event.title} subtitle={this.state.event.subtitle} showCalender={true} backFuction={this.handelBackButtonPress}>
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

  },
  whatsappButtonTitle:{
    fontFamily:'Cairo-Bold'
  }
  
}