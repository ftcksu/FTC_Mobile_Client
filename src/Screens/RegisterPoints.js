import React, { Component } from "react";
import { Image, View } from "react-native";
import {
  KeyboardAwareScrollView,
  KeyboardAwareFlatList
} from "react-native-keyboard-aware-scroll-view";

import { GradientButton, FTCStyledText, ScreenWithHeader } from "../components";
import images from "./../../assets/images";
import { Input } from "react-native-elements/src/index";
import { inputFieldStyle } from "../global";

const { inputContainerStyle, inputStyle } = inputFieldStyle;

export class RegisterPoints extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectId: 1,
      projectName: "فعالية كيف نشرب شاهي",
      projectDescription:
        "هذه الفعالية تحدف إلى تثقيف عبدالاله ونواف عن ما هو الشاهي الكويس والشاهي الخايس",
      users: [
        {
          userId: 11,
          name: "كحلوت الخاتمة",
          image: "https://www.ftcksu.com/v1/users/getUserImage/1",
          work: [
            {
              workId: 111,
              description: "شرب شاهي أخضر",
              points: 0.5
            },
            {
              workId: 112,
              description: "شرب شاهي ماتشا",
              points: 0.0
            }
          ]
        },
        {
          userId: 12,
          name: "اوطدتي",
          image: "https://www.ftcksu.com/v1/users/getUserImage/2",
          work: [
            {
              workId: 121,
              description: "شرب شاهي أحمر",
              points: 2.0
            },
            {
              workId: 122,
              description: "شرب شاهي أبيض",
              points: 0.0
            }
          ]
        }
      ]
    };
  }

  _handelBackButtonPress = () => {
    this.props.navigation.pop();
  };

  _handleTextChange = (text, workIndex, userIndex) => {
    temp = [...this.state.users];
    temp[userIndex].work[workIndex].points = text.replace(/[^0-9]/g, ""); // Making sure that the admin won't be funny and try to find a bug :)
    this.setState({
      users: temp
    });
  };

  _handleSubmitButton() {
    console.log(this.state.users);
    this._handelBackButtonPress();
  }

  renderUsers() {
    return (
      <KeyboardAwareFlatList
        data={this.state.users}
        contentContainerStyle={{ flexGrow: 0 }}
        renderItem={({ item: userItem, index: userIndex }) => (
          <View>
            <View style={styles.userView}>
              <FTCStyledText style={styles.userName}>
                {userItem.name}
              </FTCStyledText>
              <Image
                source={{ uri: userItem.image }}
                style={styles.userImage}
              />
            </View>

            <KeyboardAwareFlatList
              data={userItem.work}
              contentContainerStyle={{}}
              renderItem={({ item: workItem, index: workIndex }) => (
                <View style={styles.workContainer}>
                  <View style={styles.workText}>
                    <FTCStyledText>{workItem.description}</FTCStyledText>
                  </View>

                  <Input
                    value={workItem.points + ""}
                    inputContainerStyle={[
                      inputContainerStyle,
                      styles.workInput
                    ]}
                    inputStyle={[inputStyle, { textAlign: "center" }]}
                    onChangeText={text =>
                      this._handleTextChange(text, workIndex, userIndex)
                    }
                    keyboardType="numeric"
                    key={workIndex}
                  />
                </View>
              )}
            />
          </View>
        )}
        ListFooterComponent={
          <View style={styles.confirmWorkButtonContainer}>
            <GradientButton
              icon={images.recordPoints}
              title="رصد الأعمال"
              onPress={this._handleSubmitButton}
            />
          </View>
        }
      />
    );
  }

  render() {
    return (
      <KeyboardAwareScrollView bounces={false}>
        <ScreenWithHeader
          title={this.state.projectName}
          subtitle={this.state.projectDescription}
          showCalender={false}
          backFuction={this._handelBackButtonPress}
        >
          <View style={styles.content}>{this.renderUsers()}</View>
        </ScreenWithHeader>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = {
  content: {
    backgroundColor: "white",
    padding: 10,
    height: "100%",
    alignItems: "flex-end"
  },
  userView: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  userName: {
    alignSelf: "center",
    marginRight: 15,
    fontSize: 20
  },
  userImage: {
    height: 80,
    width: 80,
    borderRadius: 40 // Half of height and width
  },
  workContainer: {
    flexDirection: "row",
    maxWidth: "100%",
    alignItems: "center",
    marginTop: 15
  },
  workInput: {
    width: "30%",
    alignSelf: "flex-start"
  },
  workText: {
    width: "65%",
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 12
  },
  confirmWorkButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 50
  }
};
