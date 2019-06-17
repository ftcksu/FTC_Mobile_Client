import React, { Component } from 'react'
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import InputContainer from '../components/local_components/Login/InputContainer'
import Logo from '../components/local_components/Login/Logo'
import ScreenBackground from '../components/shared_components/ScreenBackground'
import LoginButton from '../components/shared_components/GradientButton'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container} >
        <ScreenBackground  />
        <Logo style={styles.imageCont} />
        <KeyboardAvoidingView behavior="position" enabled style={{height:'50%',width:'100%'}}>
          <InputContainer style={{height:'100%',width:'100%'}}>
          <LoginButton title={"تسجيل دخول"} />
          </InputContainer>
        </KeyboardAvoidingView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection:'column',
    height:"100%", width:"100%",
    alignItems:'center'
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