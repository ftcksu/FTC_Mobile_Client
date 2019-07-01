import React, { Component } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { FlatGrid } from 'react-native-super-grid';
import { FTCStyledText, ParticipantsDetails } from '../../';
import Modal from "react-native-modal/src/index";

export class Participants extends Component {      
  state = {
    isModalVisible: false,
    participants:[],
    modalData:{}
  };


     componentWillReceiveProps(nextProps) {
       console.log('componentWillReceiveProps: ', nextProps);
      if(this.props != nextProps) {
        this.setState({
          participants: nextProps.data
        });
      }
    }

    renderListEmptyComponent = () =>{
      return (
        <FTCStyledText style={styles.emptyViewText} >محد مشارك للحين</FTCStyledText>
      )
    }
    
    renderItem(item){
      console.log('renderItem: ',item);
        return (
            <View>
                <TouchableOpacity onPress={() =>{
                    this._toggleModal()
                    this.setState({ modalData: item });
                  }} >
                    <Image style={styles.circleImage} source={{uri:item.profilephoto_b64}} />
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
            <ParticipantsDetails data={this.state.modalData} />
        </Modal>
      </View>
        )
    }
    _toggleModal = () =>{
      this.setState({ isModalVisible: !this.state.isModalVisible });
    }

    renderGrid(){
      return <FlatGrid
          itemDimension={75}
          items={this.state.participants}
          style={styles.gridView}
          staticDimension={75*4 + 10*5} // 75 is the itemDimension multiplied by the number of items per row, plus the spacing between then, which is by default 10 
          renderItem={({ item }) => (
            <View>
                <TouchableOpacity onPress={() =>{
                    this._toggleModal()
                    this.setState({ modalData: item });
                  }} >
                    <Image style={styles.circleImage} source={{uri:item.profilephoto_b64}} />
                </TouchableOpacity>
            </View>
          )}
        />
    }
  render() {

    return (
      <View style={styles.gridContainer}>
      <FTCStyledText style={styles.title} > الأعضاء المشاركين </FTCStyledText>
        {this.state.participants.length ? this.renderGrid() : this.renderListEmptyComponent()}
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
    gridView: {
      flex: 1,
      flexDirection:'row'
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
    emptyViewText:{
      fontFamily:'Cairo-Bold',
      fontSize:15,
      margin:10
  },
}