import React, { Component } from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { TasksTimeline, ScreenBackground, NameAndImage } from "../components";
import ActionButton from 'react-native-circular-action-menu';
import { FontAwesome } from '@expo/vector-icons';
import * as _ from "lodash";
import moment from "moment";
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


const SOCIALMEDIACIRCLESIZE = 45;
const SOCIALMEDIAICONSIZE = 35


export class UserProfile extends Component {

    state = {
        user:this.props.navigation.state.params.user.user,
        tasks:this.props.navigation.state.params.user.tasks
    }

    renderSocialMedia() {
        return(
            <ActionButton
                buttonColor="rgba(231,76,60,1)">
                <ActionButton.Item buttonColor='#FFFC00' title="Snapchat" size={SOCIALMEDIACIRCLESIZE}>
                    {/* <Image source={snapchat} style={{ height: 35, width: 35 }} tintColor={'white'} /> */}
                    <FontAwesome name="snapchat" size={SOCIALMEDIACIRCLESIZE} />
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
    renderHeader = () => {
        return (
            <SafeAreaView style={styles.headerContainer}>
                <View style={styles.userInfoContainer}>
                    <NameAndImage src={ this.state.user.profilephoto_full_link } name={this.state.user.first_name +' '+ this.state.user.last_name} description={this.state.user.bio} style={styles.NameAndImage} imageStyle={styles.image} textStyle={styles.textStyle} showPulse={true}/>
                </View>
                <View style={styles.actionButton}>
                    {this.renderSocialMedia()}
                </View>
            </SafeAreaView>
        )
    }
  render() {
    return (
    <View style={styles.screenContainer} >
        <ScreenBackground />
        <TasksTimeline tasks = {this.state.tasks}  header = {this.renderHeader} />
    </View>
    )
  }
}


const styles = StyleSheet.create({
    screenContainer:{
        flex:1
    },
    headerContainer:{
        width: width - 16, // 16 is margin, width is full width
        alignSelf:'center'
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
        padding:60,
        // flex: 1, 
        // alignItems: 'center',
        // marginRight: 20,
        // marginTop: 50,
    },
    flatListContentContainer:{ 
      flexGrow: 0,
      paddingBottom:25,
      marginTop: 100,
    }
    
  });
