import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import NameAndImage from "./../MyProfile/NameAndImage";
import ActionButton from 'react-native-circular-action-menu';
import { FontAwesome } from '@expo/vector-icons';

export default class UserProfile extends Component {
  render() {
    return (
      <View>
        <View style={styles.triangleContainer} pointerEvents="none"/>
        <NameAndImage src='https://i.imgur.com/I4bcBnY.jpg' style={styles.userImage}/>

        <View style={styles.actionButtonContainer}>
            <ActionButton
                buttonColor="rgba(231,76,60,1)"
            >
                <ActionButton.Item buttonColor='#FFFC00' title="Snapchat">
                    <FontAwesome name="snapchat-ghost" size={32} color="white" />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#0077B5' title="LinkedIn">
                    <FontAwesome name="linkedin" size={32} color="white" />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#1DA1F2' title="Twitter">
                    <FontAwesome name="twitter" size={32} color="#F5F8FA" />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#000000' title="Steam">
                    <FontAwesome name="steam" size={32} color="white" />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#25D366' title="Whatsapp">
                    <FontAwesome name="whatsapp" size={32} color="white" />
                </ActionButton.Item>
            </ActionButton>
        </View>

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
      },
      actionButtonContainer:{
          marginTop: 350,
          zIndex: 5,
      }
  });

