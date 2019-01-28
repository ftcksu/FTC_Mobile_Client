import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import InputContainer from './InputContainer'
import Logo from './Logo'
import Background from '../MyProfile/ScreenBackground'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Background style={{height:"100%", width:"100%", position:'absolute',top:0,right:0}} />
        <Logo style={styles.imageCont} />
        <InputContainer style={{height:'40%'}} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection:'column',
    height:"100%", width:"100%"
  },
  logo:{
    height:'50%',
    flexDirection:'column',
    resizeMode:'contain',
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
  },
  imageCont:{
    height:"30%",
    alignItems: 'center',

  },
  inputContainer1:{
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 900,
    borderTopWidth: 100,
    borderRightColor: 'transparent',
    borderTopColor: 'white',
    transform: [
      {rotate: '180deg'}
    ]
  },
  inputContainer2:{
    height:'40%',
    width:'100%',
    backgroundColor:'white'
  }
  
});