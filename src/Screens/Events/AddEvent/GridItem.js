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
        <TouchableOpacity style={closeIconContainer}
            onPress={() => console.log(this.props.name)}>          
            <Icon name="md-close-circle-outline" style={closeIcon} />
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
    // backgroundColor: 'white',
    height:"100%",
    zIndex:1
  },
  closeIcon: {
    color: 'red',
    position: 'absolute',
    top:0,
    right:0,
  },
  // still not satisfying!
  closeIconContainer: {
    position: 'absolute',
    right:0,
    top: 0,
    backgroundColor: 'white',
    width: 15, 
    height: 15, 
    borderRadius: 15/2, 
    borderWidth: 2, 
    borderColor: 'white',
    paddingBottom:10
  },
  backgroundCover:{
    backgroundColor:'white',
    position:'absolute', 
    height:'100%',
    width:'95%'
  }
}
