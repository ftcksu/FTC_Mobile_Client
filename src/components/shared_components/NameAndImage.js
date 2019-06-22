import React, { Component } from 'react'
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import { FTCStyledText } from "./";
import ImageView from 'react-native-image-view';
import Pulse from 'react-native-pulse';


export class NameAndImage extends Component {

  constructor(props){
    super(props);

    // Images has to be an array, because ImageView only takes arrays.
    this.state = {
      isImageViewVisible: false,
      images: [
        {
          source: {
            uri: this.props.src // https://i.imgur.com/I4bcBnY.jpg
          }
        }
      ]
  };

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
            <Image style={[styles.image, this.props.imageStyle]} source={ this.state.images[0].source}/>
          </View>
        </TouchableWithoutFeedback>
    )

  }
  

  }
  render() {
    return (
      <View style={[styles.container, this.props.style]} >
        {
          renderImage()
        }


        <FTCStyledText style={[styles.name, this.props.textStyle]} >{this.props.name}</FTCStyledText>
        <FTCStyledText style={[styles.description, this.props.textStyle]}>{this.props.description}</FTCStyledText>
        <ImageView
            glideAlways
            animationType={'slide'}
            images={this.state.images}
            imageIndex={0}
            isVisible={this.state.isImageViewVisible}
            />
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
        color:'#9e9e9e',
        marginTop:15,
        fontFamily: 'Cairo-Bold',
        fontSize: 15
    }, description: {
      fontFamily:"Cairo-Regular",
      fontSize: 12,
      textAlign: 'center',
      color: '#9e9e9e'
    },
  });

