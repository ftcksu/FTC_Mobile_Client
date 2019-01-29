import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

/*
    This is the item that
    will be rendered inside
    <CurrentParticipants />
*/

export class GridItem extends Component {
  render() {
    const {
      container, textStyle,
      closeIcon, closeIconContainer
    } = styles
    return (
      <View style={container} >
        
          <TouchableOpacity
            onPress={() => console.log('remove')}
          >
          <View style={closeIconContainer} >
          
            <Icon name="md-close-circle-outline" style={closeIcon} />
            </View>

          </TouchableOpacity>
        
        <Text style={textStyle} >
          {this.props.name}
        </Text>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    // margin: 10,
    shadowRadius: 3,
    shadowOpacity: 0.1,
    shadowOffset: { height: 0, width: 0 },
    // padding: 5,
    width: '97%',
  },
  textStyle: {
    fontFamily: 'Cairo-Bold',
    textAlign: 'center',
    color: '#4173B0',
    fontSize: 11,
    margin: 5,
  },
  closeIcon: {
    color: 'red',
    alignSelf: 'center',
  },
  // still not satisfying!
  closeIconContainer: {
    position: 'absolute',
    right: -5,
    top: -5,
    backgroundColor: 'white',
    width: 15, 
    height: 15, 
    borderRadius: 15/2, 
    borderWidth: 2, 
    borderColor: 'white'
  },
}
