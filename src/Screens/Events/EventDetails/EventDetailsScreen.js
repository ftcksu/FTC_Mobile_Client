import React, { Component } from 'react'
import { Image, View } from 'react-native'
import ScreenBackground from "../../MyProfile/ScreenBackground";
import FTCStyledText from "../../../components/FTCStyledText";
import { TextStyles } from "../../../styles/TextStyles"
import Images from "../../../../assets/images";
import { Icon } from 'react-native-elements';

    const {
      header2, subtitle
    } = TextStyles;
  export class EventDetailsScreen extends Component {
  render() {
    return (
      <View style={{height:'100%'}} >
        <ScreenBackground style={{height:'100%',width:'100%'}} />
        <View style={styles.headerContainer} >
        <Image source={Images.cancel} style={styles.cancelIcon} />
          <FTCStyledText style={header2} > هاكاثون المستقبل النسخة الثانية</FTCStyledText>
          <FTCStyledText style={[subtitle,{marginTop:15, width:'60%'}]} > تطوير حلول تقنية تساعد الملتحقين بالجامعة من طلاب وأعضاء هيئة تدريس </FTCStyledText>
          <Image source={Images.calenderIcon} style={styles.eventIcon} />
        </View>
        <View style={styles.content} >
          

        </View>
      </View>
    )
  }
}
const styles ={
  headerContainer:{
    margin:20,
    marginTop:30, alignItems:'center', height:'30%'
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
    background:'white',
    height:'70%',
    width:'100%'
  }
}