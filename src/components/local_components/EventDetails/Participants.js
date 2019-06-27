import React, { Component } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { FlatGrid } from 'react-native-super-grid/index'
import { FTCStyledText, ParticipantsDetails } from '../../';
import Modal from "react-native-modal/src/index";

export class Participants extends Component {
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
            onBackdropPress={this._toggleModal}
            isVisible={this.state.isModalVisible}
            useNativeDriver={true}>
            <ParticipantsDetails personDetails={this.state.modalData} />
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