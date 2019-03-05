import React, { Component } from 'react'
import { View, StyleSheet, FlatList, ScrollView } from 'react-native'
import PointPerDayCard from "./../MyProfile/HistoryScreen/PointPerDayCard";
import ScreenBackground from "./..//MyProfile/ScreenBackground";
import Pulse from 'react-native-pulse';
import NameAndImage from '../MyProfile/NameAndImage';
import ActionButton from 'react-native-circular-action-menu';
import { FontAwesome } from '@expo/vector-icons';



export default class UserProfile extends Component {
  render() {
    return (
      <View>
        <ScreenBackground />
        <ScrollView>
            <View style={styles.headerContainer}>
                <Pulse color='#6535bc' numPulses={3} diameter={200} speed={20} duration={2000} style={{top: 0}}/>
                <NameAndImage src='https://i.imgur.com/I4bcBnY.jpg' name='على زق' description='يا نواف'/>
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
        <ActionButton
                buttonColor="rgba(231,76,60,1)"
                position='right'
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
    )
  }
}


const styles = StyleSheet.create({
    profileContainer:{
        width: '100%',
        height: '30%',
    },
    flatListContentContainer:{ 
      flexGrow: 0,paddingBottom:25
    },

    headerContainer: {
        backgroundColor: 'white',
        flex: 4,
        padding: 40,
    }
    
  });
