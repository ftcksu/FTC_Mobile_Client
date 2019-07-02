import React from "react";
import { Image, View, TouchableOpacity, SafeAreaView } from "react-native";
import { FTCStyledText, ScreenBackground } from "../";
import { TextStyles } from "../../global/styles/TextStyles";
import Images from "../../../assets/images";

const { header2, subtitle } = TextStyles;

export class ScreenWithHeader extends React.Component {
  handelBackButtonPress = () => {
    this.props.backFuction();
  };

  renderHeader() {
    return (
      <SafeAreaView style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.cancelIcon}
          onPress={this.handelBackButtonPress}
        >
          <Image source={Images.cancel} style={styles.cancelIcon} />
        </TouchableOpacity>
        <FTCStyledText style={header2}>{this.props.title}</FTCStyledText>
        <FTCStyledText style={[subtitle, { margin: 15 }]}>
          {this.props.subtitle}
        </FTCStyledText>
        <View style={styles.bottomContainer}>
          <Image style={styles.bottomIcon} source={this.props.bottomIcon} />
          <FTCStyledText style={styles.bottomText}>
            {" "}
            {this.props.bottomText}{" "}
          </FTCStyledText>
        </View>
      </SafeAreaView>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScreenBackground />
        {this.renderHeader()}
        {this.props.children}
      </View>
    );
  }
}

const styles = {
  container: {
    minHeight: "100%"
  },
  headerContainer: {
    margin: 20,
    marginTop: 30,
    alignItems: "center",
    flex: 1,
    flexGrow: 1,
    justifyContent: "space-evenly"
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center"
  },
  bottomIcon: {
    width: 30,
    height: 30,
    alignSelf: "center",
    tintColor: "white"
  },
  bottomText: {
    fontFamily: "Cairo-Bold",
    fontSize: 14,
    color: "white"
  },
  cancelIcon: {
    alignSelf: "flex-end",
    height: 35,
    width: 35
  },
  content: {
    backgroundColor: "white",
    flex: 4,
    padding: 10
  },
  grid: {
    backgroundColor: "#eee"
  },
  buttonIcon: {
    position: "absolute",
    right: 10
  },
  whatsappButton: {
    backgroundColor: "#2ecc71",
    height: 75,
    marginTop: 15
  },
  whatsappButtonTitle: {
    fontFamily: "Cairo-Bold"
  }
};
