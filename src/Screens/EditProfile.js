import React, { Component } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import {
  ScreenWithHeader,
  InputWithTitle,
  FTCStyledText,
  GradientButton
} from "./../components";
import { ImagePicker, Permissions, Constants } from "expo";
import { TextStyles } from "./../global/styles/TextStyles";
import Images from "./../../assets/images";

const { header2, header3 } = TextStyles;

export class EditProfile extends Component {
  state = {
    image:
      "https://charlestonpourhouse.com/wp-content/uploads/2016/09/P_FUNK.jpg",
    newPassword: "",
    newPasswordConfirmation: "",
    snapchatAccount: "",
    twitterAccount: "",
    steamAccount: "",
    whatsappAccount: ""
  };
  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3]
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  handelBackButtonPress = () => {
    this.props.navigation.pop();
  };

  renderHeaderImage() {
    return (
      <View>
        <FTCStyledText style={header2}>تغيير الصورة</FTCStyledText>
        <TouchableOpacity
          onPress={this._pickImage}
          style={styles.imageContainer}
        >
          <Image
            source={{ uri: this.state.image }}
            style={styles.profileImage}
          />
          <Image source={Images.camera} style={styles.editIcon} />
        </TouchableOpacity>
      </View>
    );
  }

  renderSocialMediaAccounts() {
    return (
      <View>
        <FTCStyledText style={[header3, { marginTop: 15 }]}>
          حسابات مواقع التواصل الاجتماعي
        </FTCStyledText>
        <InputWithTitle
          title={"حسابك في سناب"}
          placeholder={"سنابك يا حيلو"}
          onChangeText={text => this.setState({ snapchatAccount: text })}
        />
        <InputWithTitle
          title={"حسابك في تويتر"}
          placeholder={"تسو تسو"}
          onChangeText={text => this.setState({ twitterAccount: text })}
        />
        <InputWithTitle
          title={"حسابك في ستيم"}
          placeholder={"تلعب قيم؟"}
          onChangeText={text => this.setState({ steamAccount: text })}
        />
        <InputWithTitle
          title={"واتس"}
          placeholder={"مارك زوكربيرج يشوفك وانت نايم"}
          onChangeText={text => this.setState({ whatsappAccount: text })}
        />
        <View style={styles.lineBreak} />
      </View>
    );
  }

  renderPasswordSection() {
    return (
      <View>
        <FTCStyledText style={[header3, { marginTop: 15 }]}>
          تغيير كلمة المرور
        </FTCStyledText>

        <InputWithTitle
          title={"كلمة المرور الجديدة"}
          placeholder={"يا رب ما تنساني"}
          secureTextEntry={true}
          onChangeText={text => this.setState({ newPassword: text })}
        />
        <InputWithTitle
          title={"كلمة المرور الجديدة مرة أخرى"}
          placeholder={"يا رب ما تنساني مرة أخرى"}
          secureTextEntry={true}
          onChangeText={text =>
            this.setState({ newPasswordConfirmation: text })
          }
        />
        <View style={styles.lineBreak} />
      </View>
    );
  }

  renderSubmitButton() {
    return (
      <View>
        <GradientButton
          title={"حفظ التغيرات"}
          icon={Images.checkIcon}
          onPress={this.handelBackButtonPress}
          style={styles.submitButton}
        />
      </View>
    );
  }

  render() {
    return (
      <ScreenWithHeader
        onPressBack={this.handelBackButtonPress}
        hasScrollView={true}
        renderHeaderComponent={this.renderHeaderImage()}
      >
        <View style={styles.container}>
          {this.renderSocialMediaAccounts()}
          {this.renderPasswordSection()}
          {this.renderSubmitButton()}
        </View>
      </ScreenWithHeader>
    );
  }
}

const styles = {
  container: { flex: 1, backgroundColor: "white" },
  changeImageText: {
    alignSelf: "center"
  },
  imageContainer: {
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
    marginTop: 15,
    marginBottom: 50
  },
  profileImage: {
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
    marginTop: 15,
    marginBottom: 50
  },
  editIcon: {
    position: "absolute",
    right: 5,
    bottom: 5,
    tintColor: "white",
    height: 25,
    width: 25
  },
  lineBreak: {
    alignSelf: "center",
    width: "80%",
    height: 5,
    backgroundColor: "#eeeeee",
    marginTop: 20
  },
  submitButton: {
    marginTop: 20,
    marginBottom: 30
  }
};
