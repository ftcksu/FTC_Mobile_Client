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
      closeIcon, closeIconContainer,
      backgroundCover
    } = styles
    return (
      <View style={container} >
        <View style={backgroundCover} />
        <TouchableOpacity
          onPress={() => this.props.removeItem(this.props.item)}>
          <View style={closeIconContainer} >
            <Icon name="md-close-circle-outline" style={closeIcon} />
          </View>
          <Text style={textStyle} >
            {`${this.props.item.first_name} ${this.props.item.last_name}`}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    // backgroundColor: 'white',
    marginRight: 10,
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
    height: "100%",
    zIndex: 1
  },
  closeIcon: {
    color: 'red',
  },
  closeIconContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: 'white',
    width: 12,
    height: 12,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 15 / 2,
  },
  backgroundCover: {
    backgroundColor: 'white',
    position: 'absolute',
    height: '100%',
    width: '95%'
  }
}
