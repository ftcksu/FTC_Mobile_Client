import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import FTCStyledText from '../../../components/FTCStyledText'

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
    this.setState({ 
      date: `${day}/${month + 1}/${year}`,
      dateChosen: true,
     });
    console.log('A date has been picked: ', `${day} / ${month + 1} / ${year}`);
    this._hideDateTimePicker();
    console.log('This should be connected to redux!')
  };

  render() {
    const { dateChosen } = this.state
    return (
      <View>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => this._showDateTimePicker()}>
          <Text style={dateChosen ? [styles.buttonText, {color: 'black'}]: styles.buttonText}>{this.state.date}</Text>
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
    width: '100%',
    backgroundColor: '#eee',
    height: 40,
    justifyContent: 'center'
  },
  buttonText: {
    fontFamily: 'Cairo-Bold',
    fontSize: 14,
    textAlign: 'right',
    color: '#bababf',
    paddingRight: 10,
  }
}