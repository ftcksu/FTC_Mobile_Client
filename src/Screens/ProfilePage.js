import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { InfoCardList, ActionCardList , NameAndImage} from '../components';
import content from '../dummy_data/InfoCardData.json';
import UserData from '../dummy_data/UserProfile.json';
import Images from '../../assets/images'


const actionList = [
  {
    'title': 'رصد النقاط',
    'type': 'recordPoints'
  },
  {
    'title': 'إرسال التنبيهات',
    'type': 'sendNotification'
  },
]

export class ProfilePage extends Component {

  constructor() {
    super();
    this.state = {
      isImageViewVisible: false,
      user: UserData,
    };
  }

  renderProfileInformation() {
    return (
      <NameAndImage
        src='https://i.imgur.com/I4bcBnY.jpg'
        name='فك ديس'
        description='ديس از ستووووبيد'
        style={{ marginTop: 30 }}
      />
    );
  }

  renderAdminActions() {
    return (
      <View>
        <ActionCardList
          listOfData={actionList}
          hasLineSeparator={true}
        />
      </View>
    );
  }

  navigateToEventDetails = () => {
    this.props.navigation.navigate("EventDetails")
  }

  renderProfileEvents() {
    return (
      <View>
        {this.state.user.isAdmin ? this.renderAdminActions() : null}
        <InfoCardList
          listOfData={content.data}
          onPress={this.navigateToEventDetails}
          hasLineSeparator={false}
          style={styles.InfoCardList}
        />
      </View>
    );
  }

  handleSettingsPress = () => {
    this.props.navigation.navigate("EditProfilePage")
  }

  renderSettingsIcon = () => {
    return (
      <TouchableOpacity onPress={this.handleSettingsPress} style={styles.settingsButton}>
        <Image
          source={Images.settings}
          style={styles.settingsIcon}
        />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          {this.renderSettingsIcon()}
          {this.renderProfileInformation()}
          {this.renderProfileEvents()}
        </ScrollView>
        {this.renderSettingsIcon()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   marginTop: 50,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  imageContainer: {
    height: 128,
    width: 128,
    borderRadius: 64,
    marginLeft: 100,
  },
  profileImage: {
    height: 128,
    width: 128,
    borderRadius: 64
  }, 
  name: {
    color: "#333333",
    textAlign: "center",
    fontWeight: 'bold',
    fontFamily: "Cairo-Bold",
    fontSize: 17,
    marginTop: 10,
    marginLeft: 10
  }, 
  description: {
    fontFamily: "Cairo-Regular",
    fontSize: 12,
    textAlign: 'center',
    color: '#9e9e9e'
  },
  InfoCardList: {
    paddingTop: 0,
    marginTop: -15,
  },
  settingsIcon: {
    position: 'absolute',
    top: 30,
    right: 20,
    width: 25,
    height: 25,
  },
  settingsButton: {
    zIndex: 1, // to make it clickable
  }
});
