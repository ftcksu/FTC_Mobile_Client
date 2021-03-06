import React, { Component } from 'react'
import { View, KeyboardAvoidingView } from 'react-native'
import { Input } from 'react-native-elements/src/index'
import { inputFieldStyle } from "../../../global/styles/inputFieldStyle"
    const {
      inputContainerStyle, containerStyle, inputStyle
    } = inputFieldStyle;
export class InputContainer extends Component {
  state = {
    universityID: '436105865',
    password: '12345'
  }
  render() {
    return (
      <View style={this.props.style} >
        <View style={styles.inputContainer1}/>
        <View style={styles.inputContainer2} >
          <Input
            keyboardType={'numeric'}
            placeholder={'الرقم الجامعي'}
            value="436105865"
            inputContainerStyle={[inputContainerStyle, {height: 50}]}
            containerStyle={[containerStyle]}
            inputStyle={inputStyle}
            onChangeText={(text) => this.setState({universityID: text})}

          />
          <Input
            placeholder={'كلمة المرور'}
            value="12345"
            secureTextEntry={true}
            inputContainerStyle={[inputContainerStyle, {height: 50}]}
            containerStyle={[containerStyle]}
            inputStyle={inputStyle}
            onChangeText={(text) => this.setState({password: text})}
          />
          {this.props.children}
        </View>
      </View>
    )
  }
}
const styles = {
  inputContainer1:{
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderRightWidth: 600,
    borderTopWidth: 70,
    borderRightColor: 'transparent',
    borderTopColor: 'white',
    marginBottom:-0.1, // react native in a nutshell
    transform: [
      {rotate: '180deg'}
    ]
  },
  inputContainer2:{
    paddingTop:30,
    flex:1,
    width:'100%',
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'space-evenly'
  }
};