import React, { Component } from 'react';
import {View, Image, TouchableOpacity, StyleSheet, ScrollView, TouchableWithoutFeedback} from 'react-native'
import FTCStyledText from './../../components/FTCStyledText';
import InfoCardList from './../../components/InfoCardList';
import content from './../../dummy_data/InfoCardData.json';
import ImageView from 'react-native-image-view';
import UserData from './../../dummy_data/UserProfile.json';
import ActionCardList from '../../components/ActionCardList';
import Images from './../../../assets/images'




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
    const images = [
      {
          source: {
              uri: UserData.image,
          }
        },
      ];
    return(
        <View style={styles.container}>
          <TouchableWithoutFeedback
            onPress={() => {
              this.setState({
                isImageViewVisible: true,
              });
            }}
            style={styles.imageContainer}
          >
            <Image
              style={styles.profileImage} 
              source={{ uri: this.state.user.image}} 
            />
          </TouchableWithoutFeedback>
    
          <FTCStyledText style={styles.name}>{this.state.user.first_name} {this.state.user.last_name}</FTCStyledText>
          <FTCStyledText style={styles.description}>{this.state.user.description}</FTCStyledText>
    
          <ImageView
            glideAlways
            animationType={'slide'}
            images={images}
            imageIndex={0}
            isVisible={this.state.isImageViewVisible}
            />
    
          </View>
    );
  }

  renderAdminActions(){
    return (
      <View>
        <ActionCardList
            listOfData={actionList}
            hasLineSeparator={true}
        />
      </View>
    );
  }

  navigateToEventDetails = () =>{
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

  renderSettingsIcon() {
    return (
      <TouchableOpacity>
        <Image
          source={
            Images.settings
          }
          style={styles.settingsIcon}
        />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderSettingsIcon()}
        {this.renderProfileInformation()}
        {this.renderProfileEvents()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height:128,
    width: 128,
    borderRadius: 64,
    marginLeft: 100,
  },
  profileImage: {
    height:128,
    width: 128,
    borderRadius: 64
  }, name: {
    color:"#333333",
    textAlign: "center",
    fontWeight: 'bold',
    fontFamily:"Cairo-Bold",
    fontSize: 17,
    marginTop:10,
    marginLeft: 10
  }, description: {
    fontFamily:"Cairo-Regular",
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
  }
});
