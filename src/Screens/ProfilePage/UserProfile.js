import React, { Component } from 'react'
import { View, StyleSheet, FlatList, ScrollView } from 'react-native'
import PointPerDayCard from "./../MyProfile/HistoryScreen/PointPerDayCard";
import ScreenBackground from "./..//MyProfile/ScreenBackground";
import Pulse from 'react-native-pulse';
import NameAndImage from '../MyProfile/NameAndImage';
import ActionButton from 'react-native-circular-action-menu';
import { FontAwesome } from '@expo/vector-icons';



export default class UserProfile extends Component {

    renderSocialMedia() {
        return(
            <ActionButton
                buttonColor="rgba(231,76,60,1)"
                position='center'
            >
                <ActionButton.Item buttonColor='#FFFC00' title="Snapchat">
                    <FontAwesome name="snapchat-ghost" size={35} color="white" />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#0077B5' title="LinkedIn">
                    <FontAwesome name="linkedin" size={35} color="white" />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#1DA1F2' title="Twitter">
                    <FontAwesome name="twitter" size={35} color="#F5F8FA" />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#000000' title="Steam">
                    <FontAwesome name="steam" size={35} color="white" />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#25D366' title="Whatsapp">
                    <FontAwesome name="whatsapp" size={35} color="white" />
                </ActionButton.Item>
            </ActionButton>
        )
    }
  render() {
    return (
      <View>
                          <ScreenBackground />

          <ScrollView>
          <View style={styles.container}>
          <View style={{flex: 1, height: 170}} />
            <Pulse color='#ababab' numPulses={3} diameter={300} speed={20} duration={2000} pulseStyle={styles.pulse}/>
            <NameAndImage src='https://i.imgur.com/I4bcBnY.jpg' name='على زق' description='يا نواف' style={styles.NameAndImage} imageStyle={styles.image} textStyle={styles.textStyle}/>
            <View style={styles.actionButton}>
                {this.renderSocialMedia()}
            </View>
          </View>
            <View>
                <FlatList
                    data={["this.props.data","this.props.data","this.props.data","this.props.data","this.props.data","this.props.data"]}
                    contentContainerStyle={styles.flatListContentContainer}
                    renderItem={({ item }) => (
                    <PointPerDayCard/>
                    )}
                />
            </View>
            
            </ScrollView>
        
      </View>
    )
  }
}


const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    NameAndImage: {
        flex: 1,
        // marginTop: -100,
        marginBottom: 30
    },
    image: {
        width: 175,
        height: 175,
        borderRadius: 90
    },
    textStyle: {
        color: 'white'
    },
    pulse: {
        flex: 1,
        marginTop: 20,
    },
    actionButton: {
        flex: 1, 
        alignItems: 'center',
        marginTop: 50,
        marginRight: 20,
    },
    flatListContentContainer:{ 
      flexGrow: 0,
      paddingBottom:25,
    }
    
  });
