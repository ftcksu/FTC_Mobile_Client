import React, { Component } from 'react'
import { StyleSheet, View, KeyboardAvoidingView, Alert } from 'react-native'
import { InputContainer, ScreenBackground, GradientButton, Logo } from '../components'
import { loginAttempt, storeToken, showErrorMessage } from '../global' ;


export default class Login extends Component {

  handelLoginRequest = async () => {
    let universityID = this.refs.loginFormRef.state.universityID;
    let password = this.refs.loginFormRef.state.password;
    loginAttempt(universityID, password)
      .then(response => {

        if(response.status == 200 ){
            storeToken(response.data.access_token);
            this.props.onLogin()

        }else{
          console.log("login failed: ", response);
          Alert.alert('تستهبل؟', 'يا رقمك السري او الجامعي غلط، شيك عليهم', [{text: 'يصير خير'}]);
        }
      })
      .catch(error => {
        showErrorMessage()
      })
    }
    render() {
    return (
      <View style={styles.container} >
        <ScreenBackground  />
        <Logo style={styles.imageCont} />
        <KeyboardAvoidingView behavior="position" enabled style={{height:'50%',width:'100%'}}>
          <InputContainer ref="loginFormRef" style={{height:'100%',width:'100%'}}>
            <GradientButton title={"تسجيل دخول"} onPress={this.handelLoginRequest} />
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