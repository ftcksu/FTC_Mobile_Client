import React, { Component } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { FTCStyledText } from "./";
import Pulse from 'react-native-pulse';
import Modal from 'react-native-modal';


export class NameAndImage extends Component {

  state={
    isModalVisible: false
  }
  
  renderImage = () => {
    return(
      <TouchableOpacity onPress = {()=> this.showModal(true)}>
        {this.props.showPulse? <Pulse color='#ababab' numPulses={3} diameter={300} speed={20} duration={2000}/> : null}
        <Image style={[styles.image, this.props.imageStyle]} source={{ uri: this.props.src }}/>
      </TouchableOpacity>
    )
  }

  showModal = (bol) => {
    this.setState({isModalVisible:bol})
  }

  renderImageModal = () =>{
    return <Modal
        isVisible={this.state.isModalVisible}
        onBackdropPress={()=> this.showModal(false)}
        useNativeDriver={true}>
        <Image style={styles.imageFull} source={{ uri: this.props.src }}/>
    </Modal>
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]} >
        {this.renderImageModal()}
        {this.renderImage()}
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
    imageFull:{
      height:'70%',
      borderRadius:20,
    }
  });

