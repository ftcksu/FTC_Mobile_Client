import React, { Component } from 'react'
import { Image, View, ScrollView, TouchableOpacity } from 'react-native'
import ScreenBackground from "../components/shared_components/ScreenBackground";
import FTCStyledText from "../components/shared_components/FTCStyledText";
import { TextStyles } from "../global/styles/TextStyles"
import Images from "../../assets/images";
import EventLeaderDetails from "../components/local_components/EventDetails/EventLeaderDetails";
import Participants from "../components/local_components/EventDetails/Participants";
import { Button } from 'react-native-elements/src/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import GradientButton from "../components/shared_components/GradientButton";
import data from "../dummy_data/autocompleteData.json";
import { goToWhatsapp } from "../global/actions/appActions";

    const {
      header2, subtitle
    } = TextStyles;

    
  export class EventDetailsScreen extends Component {

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
    renderHeader(){
      return(
        <View style={styles.headerContainer} >
          <TouchableOpacity style={styles.cancelIcon} onPress={this.handelBackButtonPress}>
            <Image source={Images.cancel} style={styles.cancelIcon} />
          </TouchableOpacity>
          <FTCStyledText style={header2} > هاكاثون المستقبل النسخة الثانية</FTCStyledText>
          <FTCStyledText style={[subtitle,{marginTop:15, width:'60%'}]} > تطوير حلول تقنية تساعد الملتحقين بالجامعة من طلاب وأعضاء هيئة تدريس </FTCStyledText>
          <Image source={Images.calenderIcon} style={styles.eventIcon} />
        </View>
      )
    }

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

  render() {
    
    return (
      <ScrollView bounces={false}>
        <ScreenBackground />
        {this.renderHeader()}
        <View style={styles.content} >
          {this.renderLeader()}
          {this.renderParticipants()}
          {this.renderWhatsappButton()}
          <GradientButton icon={Images.handShake} style={{alignSelf:'center',marginTop:15}} title="شارك بالتنظيم" />
        </View>
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