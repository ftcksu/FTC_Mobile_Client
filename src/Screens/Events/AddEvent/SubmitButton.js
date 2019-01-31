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
  const { containerStyle } = styles
  return (
    <Button
      type={'outline'}
      title={'أضف المشروع'}
      icon={icon()}
      iconRight
      titleStyle={{ fontFamily: 'Cairo-Bold', textAlign: 'center', fontSize: 16 }}
      onPress={() => console.log('connect me to redux')}
      containerStyle={{}}
      style={containerStyle}
    />
  )
}

const styles = {
  containerStyle: {
    alignSelf: 'center',
    width: '90%',
    borderRadius: 22,
  },
  iconStyle: {

  },
}