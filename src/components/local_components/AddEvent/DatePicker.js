import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker/src/index'
import { FTCStyledText } from '../../'
import moment from 'moment'
export class DatePicker extends Component {
  state = {
    isDateTimePickerVisible: false,
    dateChosen: false,
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    this.props.onDateSelection(date)
    this._hideDateTimePicker();
  };

  render() {
    return (
      <View style={styles.buttonStyle} >
        <TouchableOpacity style={styles.buttonStyle} onPress={() => this._showDateTimePicker()}>
          <FTCStyledText style={styles.buttonText} > {moment(this.props.value).format('MMMM DD')}</FTCStyledText>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          minimumDate={new Date()} // 2019-01-06
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