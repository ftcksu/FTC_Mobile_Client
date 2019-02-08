import React, { Component } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'
import data from '../../../dummy_data/autocompleteData.json'
import FTCStyledText from '../../../components/FTCStyledText.js';
import Modal from "react-native-modal";
import ParticipantsDetails from "./ParticipantsDetails";

export default class Participants extends Component {
    state = {
        isModalVisible: false,
        modalData:''
      };
      _toggleModal = () =>
      this.setState({ isModalVisible: !this.state.isModalVisible });
    
    renderItem(item){
        return (
            <View>
                <TouchableOpacity onPress={this._toggleModal} >
                    <Image style={styles.circleImage} source={{uri:item.image}} />
                </TouchableOpacity>
            </View>
        )
    }
    renderModal(){
        return(
        <View>
        <Modal isVisible={this.state.isModalVisible}   >
            <ParticipantsDetails/>
        </Modal>
      </View>
        )
    }
  render() {
      
    return (
      <View style={styles.gridContainer}>
      <FTCStyledText style={styles.title} > الأعضاء المشاركين </FTCStyledText>
        <FlatGrid
          itemDimension={75}
          items={data}
          renderItem={({ item }) => ( this.renderItem(item) )}
        />
        {this.renderModal()}
      </View>
    )
  }
}
const styles = {
    gridContainer:{
        backgroundColor:'#eee',
        alignItems:'center'
    },
    title:{
        fontFamily:'Cairo-Bold',
        fontSize:18,
        margin:10
    },
    circleImage: {
        width: 75,
        height: 75,
        borderRadius: 75/2,
    },
}