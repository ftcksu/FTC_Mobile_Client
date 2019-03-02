import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import NameAndImage from "./../MyProfile/NameAndImage";

export default class UserProfile extends Component {
  render() {
    return (
      <View>
        <View style={styles.triangleContainer} pointerEvents="none"/>
        <NameAndImage src='https://i.imgur.com/I4bcBnY.jpg' style={styles.userImage}/>
        
      </View>
    )
  }
}


const styles = StyleSheet.create({
    triangleContainer:{
        borderRightWidth: 600,
        borderTopWidth: 70,
        borderRightColor: 'transparent',
        borderTopColor: 'white',
        marginBottom:-0.1, // react native in a nutshell
        transform: [
          {rotate: '180deg'}
        ],
        backgroundColor: 'transparent',
        height:400,
        width:'100%',
        zIndex: 1,
        position: 'absolute',
      },
      userImage:{
        flex:1,
        width:'100%',
        height: 400,
        backgroundColor:'white',
        borderRadius: 0,
        position: 'absolute',
        zIndex: -1,
        top: 0
      }
  });

