import React, { Component } from 'react'
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import { FTCStyledText } from "./";
import Pulse from 'react-native-pulse';


export class NameAndImage extends Component {

  constructor(props){
    super(props);

  renderImage = () => {
    return(
      <TouchableWithoutFeedback
            onPress={() => {
              this.setState({
                isImageViewVisible: true,
              });
            }}
          >
          <View>
            {this.props.showPulse? <Pulse color='#ababab' numPulses={3} diameter={300} speed={20} duration={2000}/> : null}
            <Image style={[styles.image, this.props.imageStyle]} source={{ uri: this.props.src }}/>
          </View>
        </TouchableWithoutFeedback>
    )

  }
  

  }
  render() {
    return (
      <View style={[styles.container, this.props.style]} >
        {
          renderImage() //TODO: imageview replacement
        }
        <FTCStyledText style={[styles.name, this.props.titleStyle]} >{this.props.name}</FTCStyledText>
        <FTCStyledText style={[styles.description, this.props.descriptionStyle]}>{this.props.description}</FTCStyledText>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    },
    image:{
        width: 120,
        height: 120,
        borderRadius: 60,
        },
    name:{
        color: 'white',
        marginTop:15,
        fontFamily: 'Cairo-Bold',
        fontSize: 15
    },
    description: {
      fontFamily:"Cairo-Regular",
      fontSize: 12,
      textAlign: 'center',
      color: 'white'
    },
  });

