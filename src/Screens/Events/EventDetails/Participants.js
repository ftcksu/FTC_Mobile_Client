import React, { Component } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'
import FTCStyledText from '../../../components/FTCStyledText.js';
import Modal from "react-native-modal";
import ParticipantsDetails from "./ParticipantsDetails";

export default class Participants extends Component {
  componentDidMount(){
    this.setState({participants:this.props.participants})
  }
    state = {
        isModalVisible: false,
        participants:[],
        modalData:null
      };
      
      _toggleModal = () =>{
        this.setState({ isModalVisible: !this.state.isModalVisible });
      }
    
    renderItem(item){
        return (
            <View>
                <TouchableOpacity onPress={() =>{
                    this._toggleModal()
                    this.setState({ modalData: item });
                  }} >
                    <Image style={styles.circleImage} source={{uri:item.image}} />
                </TouchableOpacity>
            </View>
        )
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
            <ParticipantsDetails callback={this._toggleModal} personDetails={this.state.modalData} />
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
          items={this.state.participants}
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