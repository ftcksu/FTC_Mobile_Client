import React from 'react'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';

/*
    I think this should be
    a functional component
*/
const icon = () => {
  return (
    <Icon
      name={'md-add-circle-outline'}
      size={22}
      style={{ color: 'red' }}
      containerStyle={{ alignSelf: 'stretch' }}
    />
  )
}

export const SubmitButton = () => {
  const { containerStyle, textStyle, buttonStyle } = styles
  return (
    <Button
      type={'outline'}
      title={'أظف المشروع'}
      titleStyle={textStyle}
      onPress={() => console.log('connect me to redux')}
      buttonStyle={buttonStyle}
      // containerStyle={containerStyle}
    />
  )
}

const styles = {
  containerStyle: {
    // alignSelf: 'center',
    // width: '90%',
    justifyContent: 'center',
  },
  iconStyle: {

  },
  textStyle: {
    fontFamily: 'Cairo-Bold',
    textAlign: 'center',
    fontSize: 12, // button shrinks with fontSize
    color: 'black'
  },
  buttonStyle: {
    alignSelf: 'center',
    borderRadius: 22,
    width: '87%',
    // height: '40%',
    backgroundColor: 'transparent',
    borderColor: 'blue',
    borderWidth: 2,

  }
}