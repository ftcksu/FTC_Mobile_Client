import React, { Component } from 'react'
import { View, StyleSheet, FlatList, ScrollView, Image } from 'react-native'
import PointPerDayCard from "../../shared_components/PointPerDayCard";
import ScreenBackground from "./..//MyProfile/ScreenBackground";
import NameAndImage from '../../shared_components/NameAndImage';
import ActionButton from 'react-native-circular-action-menu';
import { FontAwesome } from '@expo/vector-icons';



const SOCIALMEDIACIRCLESIZE = 45;
const SOCIALMEDIAICONSIZE = 35


export default class UserProfile extends Component {

    renderSocialMedia() {
        return(
            <ActionButton
                buttonColor="rgba(231,76,60,1)"
                position='center'
            >
                <ActionButton.Item buttonColor='#FFFC00' title="Snapchat" size={SOCIALMEDIACIRCLESIZE}>
                    {/* <Image source={snapchat} style={{ height: 35, width: 35 }} tintColor={'white'} /> */}
                    <FontAwesome name="snapchat-ghost" size={SOCIALMEDIAICONSIZE} color="white" />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#0077B5' title="LinkedIn" size={SOCIALMEDIACIRCLESIZE}>
                    <FontAwesome name="linkedin" size={SOCIALMEDIAICONSIZE} color="white" />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#1DA1F2' title="Twitter" size={SOCIALMEDIACIRCLESIZE}>
                    <FontAwesome name="twitter" size={SOCIALMEDIAICONSIZE} color="#F5F8FA" />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#000000' title="Steam" size={SOCIALMEDIACIRCLESIZE}>
                    <FontAwesome name="steam" size={SOCIALMEDIAICONSIZE} color="white" />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#25D366' title="Whatsapp" size={SOCIALMEDIACIRCLESIZE}>
                    <FontAwesome name="whatsapp" size={SOCIALMEDIAICONSIZE} color="white" />
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
                <View style={{flex: 0.4}} />
                <View style={styles.userInfoContainer}>
                    <NameAndImage src='https://i.imgur.com/I4bcBnY.jpg' name='على زق' description='يا نواف' style={styles.NameAndImage} imageStyle={styles.image} textStyle={styles.textStyle} showPulse={true}/>
                </View>
                <View style={styles.actionButton}>
                    {this.renderSocialMedia()}
                </View>
            </View>
            <View pointerEvents={'none'}>
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
    },
    NameAndImage: {
        flex: 1,
        paddingBottom: 0,
    },
    image: {
        width: 175,
        height: 175,
        borderRadius: 90
    },
    textStyle: {
        color: 'white'
    },
    icon: {
        borderColor: 'black',
        borderWidth: 2
    },
    actionButton: {
        flex: 1, 
        alignItems: 'center',
        marginRight: 20,
        marginTop: 50,
    },
    flatListContentContainer:{ 
      flexGrow: 0,
      paddingBottom:25,
      marginTop: 100,
    }
    
  });
