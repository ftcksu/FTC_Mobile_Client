import React, { Component } from 'react'
import { Text, View } from 'react-native'
import  FTCStyledText  from "../../components/FTCStyledText";
import { Input } from "react-native-elements";
import { inputFieldStyle } from '../../styles/inputFieldStyle'

export class SendNotification extends Component {
  render() {
    const {
        inputContainerStyle, inputStyle
      } = inputFieldStyle
    return (
      <View style={styles.container}>
        <FTCStyledText style={styles.title} > وش تبي ترسل لهم؟ </FTCStyledText>
        <Input
            inputContainerStyle={inputContainerStyle}
            containerStyle={styles.inputContainer}
            inputStyle={inputStyle}
        />
      </View>
    )
  }
}
const styles = {
    container:{
        alignItems:"center",
        flex:1,
        marginTop:32
    },
    title:{
        fontFamily:'Cairo-Bold',
        fontSize:22
    },
    inputContainer:{
        minHeight:"30%",
    }
}