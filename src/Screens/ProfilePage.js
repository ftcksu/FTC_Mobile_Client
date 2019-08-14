import React, { Component } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView
} from "react-native";
import { InfoCardList, ActionCardList, NameAndImage } from "../components";
import { getLoggedInUserInfo } from "../global";
import content from "../dummy_data/InfoCardData.json";

import Images from "../../assets/images";

export class ProfilePage extends Component {
  constructor() {
    super();
    this.state = {
      isImageViewVisible: false,
      user: {},
      actionList: [
        {
          title: "رصد النقاط",
          type: "recordPoints",
          onPress: this.navigateToEventsForRegisterWork
        },
        {
          title: "إرسال التنبيهات",
          type: "sendNotification",
          onPress: this.navigateToSendNotificaiton
        }
      ]
    };
  }

  componentDidMount() {
    getLoggedInUserInfo().then(response => {
      this.setState({
        user: response.data.user
      });
      // console.log(response.data.user);
    });
  }

  renderProfileInformation() {
    return (
      <NameAndImage
        src={this.state.user.profilephoto_full_link}
        name={this.state.user.first_name + " " + this.state.user.last_name}
        titleStyle={{ color: "black" }}
        description={this.state.user.bio}
        descriptionStyle={{ color: "black" }}
        style={{ marginTop: 30 }}
      />
    );
  }

  renderAdminActions() {
    return (
      <View>
        <ActionCardList
          listOfData={this.state.actionList}
          hasLineSeparator={true}
        />
      </View>
    );
  }

  navigateToEventDetails = () => {
    this.props.navigation.navigate("EventDetails");
  };

  navigateToEventsForRegisterWork = () => {
    this.props.navigation.navigate("EventsForRegisterPoints");
  };

  navigateToSendNotificaiton = () => {
    this.props.navigation.navigate("SendNotification");
  };

  navigateToEditProfile = () => {
    this.props.navigation.navigate("EditProfile", { user: this.state.user });
  };

  renderProfileEvents() {
    return (
      <View>
        {this.state.user.is_admin ? this.renderAdminActions() : null}
        <InfoCardList
          style={{ backgroundColor: "black" }}
          title={"المشاريع المشارك فيها"}
          listOfData={content.data}
          onPress={this.navigateToEventDetails}
          hasLineSeparator={false}
          style={styles.InfoCardList}
          titleStyle={{ fontSize: 18 }}
        />
      </View>
    );
  }

  renderSettingsIcon = () => {
    return (
      <TouchableOpacity
        onPress={this.navigateToEditProfile}
        style={styles.settingsButton}
      >
        <Image source={Images.settings} style={styles.settingsIcon} />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={{ margin: 20 }}>
        {this.renderSettingsIcon()}

        <ScrollView style={{ paddingRight: 16, marginLeft: 16 }}>
          {this.renderProfileInformation()}
          {this.renderProfileEvents()}
        </ScrollView>
      </View>
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
    marginLeft: 100
  },
  profileImage: {
    height: 128,
    width: 128,
    borderRadius: 64
  },
  name: {
    color: "#333333",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Cairo-Bold",
    fontSize: 17,
    marginTop: 10,
    marginLeft: 10
  },
  description: {
    fontFamily: "Cairo-Regular",
    fontSize: 12,
    textAlign: "center",
    color: "#9e9e9e"
  },
  InfoCardList: {
    paddingTop: 0
    // marginTop: -15,
  },
  settingsIcon: {
    width: 25,
    height: 25
  },
  settingsButton: {
    position: "absolute",
    top: 30,
    right: 20,
    width: 50,
    height: 50,
    zIndex: 2,
    justifyContent: "center",
    alignItems: "center"
  }
});
