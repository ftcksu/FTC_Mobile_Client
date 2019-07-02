import React, { Component } from "react";
import { ScrollView, SafeAreaView, StyleSheet } from "react-native";
import InfoCardList from "../components/shared_components/InfoCardList";
import content from "../dummy_data/InfoCardData.json";

export class EventsForRegisterPoints extends Component {
  navigateToEventDetails = () => {
    this.props.navigation.navigate("RegisterPoints");
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
    // height:'40%',
    // width:'40%'
    // backgroundColor:'black'
    alignSelf: "center"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  }
});
