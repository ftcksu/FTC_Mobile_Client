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
import { showMessage } from "../global";

const { header2, header3 } = TextStyles;

export class EditProfile extends Component {
  componentDidMount() {
    this.props.navigation.state.params.user.socialmedia.forEach(account => {
      switch (account.platform) {
        case "snapchat":
          this.setState({ snapchatAccount: account.username });
          break;
        case "twitter":
          this.setState({ twitterAccount: account.username });
          break;
        case "steam":
          this.setState({ steamAccount: account.username });
          break;
        case "whatsapp":
          this.setState({ whatsappAccount: account.username });
          break;
        default:
          break;
      }
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      user: props.navigation.state.params.user,
      newImage: "",
      snapchatAccount: "",
      twitterAccount: "",
      steamAccount: "",
      whatsappAccount: "",
      newPassword: "",
      newPasswordConfirmation: ""
    };
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("اسمحلنا طال عمرك علشان نغير الصورة");
      }
    }
  };

  _pickImage = async () => {
    await this.getPermissionAsync();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3]
    });

    if (!result.cancelled) {
      this.setState({ newImage: result.uri });

      alert("سوف يتم قبول الصورة قبل اعتمادها");
    }
  };

  validateUserInput() {
    const { newPassword, newPasswordConfirmation } = this.state;

    const changedPassword =
      (newPassword.length > 0) | (newPasswordConfirmation.length > 0);

    if (!changedPassword) {
      return true;
    }

    const passwordConfirmed = newPassword == newPasswordConfirmation;

    const passwordLength =
      (newPassword.length >= 8) & (newPassword.length <= 40);

    let errorMessage = "";
    if (!passwordConfirmed) {
      errorMessage = errorMessage + "\n" + "*الباسوورد غير متطابق";
    }
    if (!passwordLength) {
      errorMessage = errorMessage + "\n" + "*الباسوورد يجب ان يكون بين 8 و40";
    }
    if (errorMessage.length) {
      showMessage(undefined, errorMessage, "ابشر طال عمرك");
      return false;
    }
    return true;
  }

  handleBackButtonPress = () => {
    this.props.navigation.pop();
  };

  handleConfirmButton = () => {
    if (!this.validateUserInput()) {
      return;
    }

    let socialMedia = [
      {
        platform: "snapchat",
        username: this.state.snapchatAccount
      },
      {
        platform: "twitter",
        username: this.state.twitterAccount
      },
      {
        platform: "steam",
        username: this.state.steamAccount
      },
      {
        platform: "whatsapp",
        username: this.state.whatsappAccount
      }
    ];

    userImage =
      this.state.newImage == ""
        ? this.state.user.profilephoto_full_link
        : this.state.newImage;

    let userOutput = {};

    if (this.state.newPassword != "") {
      userOutput = {
        img: userImage,
        password: this.state.newPassword,
        socialmedia: socialMedia
      };
    } else {
      userOutput = {
        img: userImage,
        socialmedia: socialMedia
      };
    }

    console.log(userOutput);

    this.props.navigation.pop();
  };

  renderHeaderImage() {
    let profileImage =
      this.state.newImage == ""
        ? this.state.user.profilephoto_full_link
        : this.state.newImage;
    return (
      <View>
        <FTCStyledText style={header2}>تغيير الصورة</FTCStyledText>
        <TouchableOpacity
          onPress={this._pickImage}
          style={styles.imageContainer}
        >
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
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
          value={this.state.snapchatAccount}
        />
        <InputWithTitle
          value={this.state.twitterAccount}
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
          onPress={this.handleConfirmButton}
          style={styles.submitButton}
        />
      </View>
    );
  }

  render() {
    return (
      <ScreenWithHeader
        onPressBack={this.handleBackButtonPress}
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
