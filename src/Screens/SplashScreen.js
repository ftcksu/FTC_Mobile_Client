import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { ScreenBackground,FTCStyledText } from '../components'
import images from '../../assets/images';

export class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ScreenBackground />
      <Image style={styles.logo} source={images.logo} />
      <FTCStyledText style={styles.title} > Future Technology Club </FTCStyledText>
      <FTCStyledText style={styles.title} > نادي تقنية المستقبل </FTCStyledText>
      <View style={styles.lineBreak}  />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height:"100%",
    width:"100%",
    justifyContent: 'center',
    flexDirection:'column',
  },
  logo:{
    width:'50%',
    alignSelf:'center',
    resizeMode:'contain'
  },
  title:{
    fontFamily:'Cairo-Bold',
    fontSize:20,
    color:'#ffffff',
    textAlign:'center'
  },
  lineBreak:{
    alignSelf:"center",
    width:"45%" ,
    height:3,
    backgroundColor:"#eeeeee",
    marginTop:40
  }
  
});