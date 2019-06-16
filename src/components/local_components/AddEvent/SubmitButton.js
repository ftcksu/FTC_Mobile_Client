import React from 'react'
import { TouchableOpacity } from 'react-native'
import GradientButton from '../../shared_components/GradientButton'
import Icon from 'react-native-vector-icons/Ionicons'
import Images from '../../../../assets/images'

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

export const SubmitButton = (props) => {
  const { containerStyle, textStyle, buttonStyle } = styles
  return (
    <GradientButton
      title={'أظف المشروع'}
      style={{ width: '100%', height: 50 }}
      icon={Images.roundAdd}
      onPress={() => props.submit()}
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