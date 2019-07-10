import React, { Component } from "react";
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { InfoCardList } from "../components";
import content from "../dummy_data/InfoCardData.json";
import Images from "../../assets/images";

export class EventsForRegisterPoints extends Component {
  navigateToEventDetails = () => {
    this.props.navigation.navigate("RegisterPoints");
  };

  _handelBackButtonPress = () => {
    this.props.navigation.pop();
  };

  renderRegisteredProjects() {
    return (
      <InfoCardList
        onPress={this.navigateToEventDetails}
        title={"مشاريع بحاجه إلى تسجيل نقاط"}
        listOfData={content.data}
      />
    );
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity
          style={styles.cancelIcon}
          onPress={this._handelBackButtonPress}
        >
          <Image source={Images.cancel} style={styles.cancelIcon} />
        </TouchableOpacity>
        <ScrollView>{this.renderRegisteredProjects()}</ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: "#3986e0",
    position: "absolute",
    bottom: 0,
    right: 0,
    marginRight: 20,
    marginBottom: 20
  },
  floatingActionButtonContent: {
    alignSelf: "center"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  },
  cancelIcon: {
    alignSelf: "flex-end",
    height: 35,
    width: 35,
    tintColor: "black",
    marginRight: 10
  }
});
