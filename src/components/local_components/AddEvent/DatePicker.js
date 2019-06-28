import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker/src/index'
import FTCStyledText from '../../shared_components/FTCStyledText'

export class DatePicker extends Component {
  state = {
    isDateTimePickerVisible: false,
    date: 'تاريخ المشروع',
    dateChosen: false,
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    this.props.updateState(`${day}/${month + 1}/${year}`)
    this.setState({ 
      dateChosen: true,
     });
    this._hideDateTimePicker();
  };

  render() {
    const { dateChosen } = this.state
    return (
      <View style={{alignItems:'center'}} >
        <TouchableOpacity style={styles.buttonStyle} onPress={() => this._showDateTimePicker()}>
          <Text style={dateChosen ? [styles.buttonText, {color: 'black'}]: styles.buttonText}>{this.props.date}</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          minimumDate={new Date(1546722000000)} // 2019-01-06
        />
      </View>
    )
  }
}

const styles = {
  buttonStyle: {
    marginBottom: 15,
    width: '105%',
    backgroundColor: '#eee',
    height: 40,
    // justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Cairo-Bold',
    fontSize: 14,
    textAlign: 'right',
    color: '#bababf',
    paddingRight: 10,
  }
}