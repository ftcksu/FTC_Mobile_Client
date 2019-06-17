import React, { Component } from 'react'
import { StyleSheet, View, KeyboardAvoidingView, Alert } from 'react-native'
import InputContainer from '../components/local_components/Login/InputContainer'
import Logo from '../components/local_components/Login/Logo'
import ScreenBackground from '../components/shared_components/ScreenBackground'
import LoginButton from '../components/shared_components/GradientButton'
import { loginAttempt } from '../global/actions/ApiCalls' ;
import { storeToken } from '../global/actions/LocalStorage' ;

export default class Login extends Component {

  handelLoginRequest = () => {
    let universityID = this.refs.loginFormRef.state.universityID;
    let password = this.refs.loginFormRef.state.password;
    loginAttempt(universityID, password)
      .then(response => {
        if(response.ok){
          response.json().then(data => {
            storeToken(data.access_token);
            this.props.onLogin()
          });
        }else{
          Alert.alert('تستهبل؟', 'يا رقمك السري او الجامعي غلط، شيك عليهم', [{text: 'يصير خير'}]);
          
        }
      })
      .catch(error => {
        Alert.alert('مشكل كبير', 'يا ان نتك خربان ولا سيرفرنا فاقع', [{text: 'جي جي'}]);
      })
    }
    render() {
    return (
      <View style={styles.container} >
        <ScreenBackground  />
        <Logo style={styles.imageCont} />
        <KeyboardAvoidingView behavior="position" enabled style={{height:'50%',width:'100%'}}>
          <InputContainer ref="loginFormRef" style={{height:'100%',width:'100%'}}>
            <LoginButton title={"تسجيل دخول"} onPress={this.handelLoginRequest} />
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