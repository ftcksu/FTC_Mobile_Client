import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'
import FTCStyledText from '../../shared_components/FTCStyledText'
import images from '../../../../assets/images';

export class Logo extends Component {
  render() {
    return (
      <View style={[styles.container,this.props.style]}>
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
    justifyContent: 'center',
    flexDirection:'column',
  },
  logo:{
    height:'50%',
    flexDirection:'column',
    resizeMode:'contain',
    marginBottom:10
  },
  title:{
    fontFamily:'Cairo-Bold',
    fontSize:11,
    color:'#ffffff',
    textAlign:'center'
  },
  lineBreak:{
    alignSelf:"center",
    width:"25%" ,
    height:3,
    backgroundColor:"#eeeeee",
    marginTop:10
  }
  
});