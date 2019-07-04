import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker/src/index'
import { FTCStyledText } from '../../'
import moment from 'moment'
export class DatePicker extends Component {
  state = {
    isDateTimePickerVisible: false,
    date: Date(),
    dateChosen: false,
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    this.setState({date:  date})
    // this.props.updateState(`${day}/${month + 1}/${year}`)
    this._hideDateTimePicker();
  };

  render() {
    return (
      <View style={styles.buttonStyle} >
        <TouchableOpacity style={styles.buttonStyle} onPress={() => this._showDateTimePicker()}>
          <FTCStyledText style={styles.buttonText} > {moment(this.state.date).format('MMMM DD')}</FTCStyledText>
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
    flex:1,
    flexDirection:'row',
    height:40,
    justifyContent:'flex-end'
  },
  buttonText: {
    fontFamily: 'Cairo-Bold',
    fontSize: 14,
    textAlign: 'right',
    alignSelf:'center',
    paddingRight: 10,
  }
}