import React, { Component } from 'react'
import { Image, View, ScrollView } from 'react-native'
import ScreenBackground from "../../MyProfile/ScreenBackground";
import FTCStyledText from "../../../components/FTCStyledText";
import { TextStyles } from "../../../styles/TextStyles"
import Images from "../../../../assets/images";
import EventLeaderDetails from "./EventLeaderDetails";
import Participants from "./Participants";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import GradientButton from "../../Login/GradientButton";

    const {
      header2, subtitle
    } = TextStyles;

    
  export class EventDetailsScreen extends Component {
    
    renderWhatsappButton(){
      return (
        <Button
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
  render() {
    
    return (
      <ScrollView  >
        <ScreenBackground style={{height:'100%',width:'100%'}} />
        <View style={styles.headerContainer} >
        <Image source={Images.cancel} style={styles.cancelIcon} />
          <FTCStyledText style={header2} > هاكاثون المستقبل النسخة الثانية</FTCStyledText>
          <FTCStyledText style={[subtitle,{marginTop:15, width:'60%'}]} > تطوير حلول تقنية تساعد الملتحقين بالجامعة من طلاب وأعضاء هيئة تدريس </FTCStyledText>
          <Image source={Images.calenderIcon} style={styles.eventIcon} />
        </View>
        <View style={styles.content} >
          <EventLeaderDetails style={{margin:15}} leaderName={'عبدالمحسن العنزي'} image ='https://pbs.twimg.com/media/COuih_uWwAAs8ZE.png' />
          <Participants/>
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