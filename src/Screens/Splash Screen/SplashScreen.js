import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'
import Background from '../MyProfile/ScreenBackground'
import FTCStyledText from '../../components/FTCStyledText'
import images from '../../../assets/images';

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Background style={{height:"100%", width:"100%", position:'absolute'}} />
      <Image style={styles.logo} source={images.logo} />
      <FTCStyledText style={styles.title} > Future Technology Club </FTCStyledText>
      <FTCStyledText style={styles.title} > نادي تقنية المستقبل </FTCStyledText>
      
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
  }
  
});