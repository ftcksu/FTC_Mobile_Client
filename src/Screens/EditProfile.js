import React, { Component } from 'react'
import { View, SafeAreaView, TouchableOpacity, Text, Image } from 'react-native'
import { ImagePicker, Constants, Permissions } from 'expo'
import { connectActionSheet, ActionSheetProvider } from '@expo/react-native-action-sheet';
import FTCStyledText from '../components/shared_components/FTCStyledText';
import { TextStyles } from '../global/styles/TextStyles'
import GradientButton from '../components/shared_components/GradientButton'
import Images from '../../assets/images/'


const { header } = TextStyles
const { checkIcon } = Images

const avatarPlaceholder = 'https://charlestonpourhouse.com/wp-content/uploads/2016/09/P_FUNK.jpg'

@connectActionSheet
export class EditProfile extends Component {

  state = {
    image: null // 'https://i.imgur.com/YKIZP3C.jpg'
  }

  componentDidMount() {
    this.setState({ image: avatarPlaceholder })
  }

  renderHeader = () => {
    return (
      <FTCStyledText style={header}>تعديل الملف الشخصي</FTCStyledText>
    )
  }

  // permission requested on choice click, 1: camera, 2: album
  getPermissionAsync = async (choice) => {
    if (choice === 1) {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        if (status !== 'granted') {
          alert('Sorry, we need camera permissions to make this work!');
        }
      }
    } else {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    }
  }

  // take photo with camera
  _takeImage = async () => {
    await this.getPermissionAsync(1)

    options = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      // here you can set quality compression if you want
    }

    let result = await ImagePicker.launchCameraAsync(options)

    console.log(result)

    if (!result.cancelled) {
      this.setState({ image: result.uri })
    }
  }

  // pick image from photo album
  _pickImage = async () => {
    await this.getPermissionAsync(2)

    options = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      // here you can set quality compression if you want
    }

    let result = await ImagePicker.launchImageLibraryAsync(options)

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  }

  cameraOrAlbumChoice = () => {
    const options = ['Take Photo...', 'Choose From Library...', 'Cancel'];
    const cancelButtonIndex = 2;
    this.props.showActionSheetWithOptions({
      options,
      cancelButtonIndex,
    }, (buttonIndex) => {
      if (buttonIndex === 0) {
        this._takeImage();
      } else if (buttonIndex === 1) {
        this._pickImage();
      }
    });
  }

  renderProfileImageChange = () => {
    return (
      <TouchableOpacity
        onPress={this.cameraOrAlbumChoice}
      >
        {this.renderImage()}
      </TouchableOpacity>
    )
  }

  renderImage = () => {
    if (this.state.image != null) {
      return (
        <Image
          style={styles.imageStyle}
          source={{ uri: this.state.image }}
        />
      )
    }
    else {
      return (
        <Image
          style={styles.imageStyle}
          source={{ uri: avatarPlaceholder }}
        />
      )
    }
  }

  renderSubmitButton = () => {
    return (
      <GradientButton
        style={styles.submitButton}
        title={'submit changes'}
        onPress={() => this.submit()}
        icon={checkIcon}
      />
    )
  }

  submit = () => {
    console.log(this.state)
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          {this.renderHeader()}
          {this.renderProfileImageChange()}
          {this.renderSubmitButton()}
        </View>
      </SafeAreaView>
    )
  }
}

const styles = {
  container: {
    alignItems: 'center',
    justifyConter: 'center',
  },
  button: {
    width: 40,
    height: 20,
    backgroundColor: '#333333',
    marginTop: 30,
    alignSelf: 'center',
  },
  imageStyle: {
    height: 150,
    width: 150,
    borderRadius: 150/2,
    marginTop: 15,
  },
  submitButton: {
    width: '95%',
    height: 50,
    marginTop: 30,
  }
}

