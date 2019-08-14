import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image
} from "react-native";
import { FTCStyledText, GradientButton, InputWithTitle } from "../components";
import Images from "../../assets/images";

export class SendNotification extends Component {
  constructor() {
    super();
    state = {
      notificationMessage: ""
    };
  }
  handleBackButtonPress = () => {
    this.props.navigation.pop();
  };

  handleConfirmButton() {
    // Send Notification here
    return;
  }

  renderSubmitButton() {
    return (
      <View style={styles.submitButtonContainer}>
        <GradientButton
          title={"إرسال التنبيه"}
          icon={Images.checkIcon}
          onPress={this.handleConfirmButton}
        />
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity
          style={styles.cancelIcon}
          onPress={this.handleBackButtonPress}
        >
          <Image source={Images.cancel} style={styles.cancelIcon} />
        </TouchableOpacity>
        <KeyboardAvoidingView
          style={{ flex: 3, flexGrow: 2, backgroundColor: "white" }}
          behavior={"padding"}
        >
          <View style={styles.container}>
            <FTCStyledText style={styles.listTitle}>
              إرسال التنبيهات
            </FTCStyledText>
          </View>
          <View style={styles.inputContainer}>
            <InputWithTitle
              title={"مع قوة هائلة تأتي مسؤولية هائلة"}
              placeholder={"سمعني الأخبار الحلوة"}
              onChangeText={text =>
                this.setState({ notificationMessage: text })
              }
            />
          </View>
          {this.renderSubmitButton()}
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = {
  container: {
    justifyContent: "center",
    flexDirection: "column",
    paddingTop: 10
  },
  listTitle: {
    fontFamily: "Cairo-Bold",
    textAlign: "center",
    fontSize: 23
  },
  inputContainer: {
    height: 100,
    marginTop: 100
  },
  submitButtonContainer: {
    marginBottom: 30,
    flex: 1,
    justifyContent: "flex-end"
  },
  cancelIcon: {
    alignSelf: "flex-end",
    height: 35,
    width: 35,
    marginRight: 8,
    tintColor: "black"
  }
};
