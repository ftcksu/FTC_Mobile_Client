import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Picker } from 'react-native'
import Modal from 'react-native-modal'
import { Button } from 'react-native-elements';

export class MaxParticipants extends Component {

  state = {
    changed: false,
    visible: false,
  }

  _renderNumOfParti = () => {
    let list = []
    for (i = 1; i <= 60; i++) {
      list.push({ label: `${i}`, key: i, value: i })
    }
    return list
  }

  _renderPickerItems = () => {
    const list = this._renderNumOfParti()
    return list.map((item) => {
      return (
        <Picker.Item
          label={item.label}
          value={item.value}
        />
      );
    })
  }

  _handleChangeValue = (value) => {
    this.props.updateState(value)
    this.setState({ changed: true })
  }

  _rendrPicker = () => {
    return (
      <Picker
        style={{ height: '100%', width: '100%', margin: 10 }}
        selectedValue={this.props.maxPart}
        onValueChange={(value, index) => this._handleChangeValue(value)}
      >
        {this._renderPickerItems()}
      </Picker>
    )
  }
  // Too much hassle

  _modelContent = () => {
    // content render inside modal.
  }

  _renderModal = () => {
    return (
      <View>
        <Modal
          isVisible={this.state.visible}
          onBackdropPress={() => this.setState({ visible: false })}
        >
          <View style={styles.modalContent} >
            {this._rendrPicker()}
            <Button
              title="تم"
              type="outline"
              style={{ marginBottom: 40, width: 35 }}
              onPress={() => this.setState({ visible: false })}
            />
          </View>
        </Modal>
      </View>
    )
  }

  _renderTextInButton = () => {
    const placeholder = 'الحد الأعلى للمشاركين'
    const { changed} = this.state
    const { buttonTextStyle, changedTextStyle } = styles
    return (
      changed
      ? <Text style={changedTextStyle} >{this.props.maxPart}</Text>
      : <Text style={buttonTextStyle} >{placeholder}</Text>
    )
  }

  render() {

    const {
      buttonStyle, buttonTextStyle, dropdownStyle, changedTextStyle
    } = styles

    const { changed, placeholder, value } = this.state

    return (
      <TouchableOpacity style={buttonStyle} onPress={() => this.setState({ visible: true })}>
        {this._renderModal()}
        {this._renderTextInButton()}
      </TouchableOpacity>
    )
  }
}

const styles = {

  buttonTextStyle: {
    textAlign: 'right',
    fontFamily: 'Cairo-Bold',
    color: '#bababf', // Magic
    fontSize: 14,
    paddingRight: 15,
  },
  dropdownStyle: {
    width: 50,
    height: 300,
  },
  changedTextStyle: {
    textAlign: 'right',
    fontFamily: 'Cairo-Bold',
    color: 'black', // Magic
    fontSize: 14,
    paddingRight: 15,
  },
  buttonStyle: {
    width: '105%',
    backgroundColor: '#eee',
    alignSelf:'center',
    height: 40,
    justifyContent: 'center'
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
    height: 250,
    width: 200,
  },
}
