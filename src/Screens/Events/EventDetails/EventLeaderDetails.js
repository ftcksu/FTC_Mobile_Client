import React, { Component } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import FTCStyledText from "../../../components/FTCStyledText";
import Modal from "react-native-modal";
import ParticipantsDetails from "./ParticipantsDetails";

export default class EventLeaderDetails extends Component {
  state = {
    isModalVisible: false,
  };

  _toggleModal = () =>{
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  renderModal(){
    return(
      <View>
      <Modal
          isVisible={this.state.isModalVisible}
          backdropOpacity={0}
          animationIn={'zoomInDown'}
          animationOut={'zoomOutUp'}
          animationInTiming={1000}
          animationOutTiming={1000}
        >
          <ParticipantsDetails callback={this._toggleModal} personDetails={this.props.eventLeader} />
      </Modal>
    </View>
    )
  }

  render() {
    return (
      <TouchableOpacity onPress={this._toggleModal} style={[styles.container,this.props.style]} >
        <Image style={styles.circleImage} source={{uri:this.props.eventLeader.image}} />
        <FTCStyledText style={styles.leaderName} > {this.props.eventLeader.first_name} {this.props.eventLeader.last_name}</FTCStyledText>
        <FTCStyledText style={styles.subtitle}> قائد المشروع </FTCStyledText>
        {this.renderModal()}
      </TouchableOpacity>
    )
  }
}
const styles = {
    container:{
        alignItems:'center',
        // alignContent:'center'
    },
    circleImage: {
        width: 75,
        height: 75,
        borderRadius: 75/2,
    },
    leaderName:{
        fontFamily:'Cairo-Bold',
        fontSize:15,
    },
    subtitle:{
        fontFamily:'Cairo-Bold',
        fontSize:11,
        color:'#727272'
    }
}