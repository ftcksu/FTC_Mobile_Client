import React, { Component } from 'react'
import { View, SafeAreaView, TouchableOpacity, Text, Image } from 'react-native'
import { ImagePicker, Constants, Permissions } from 'expo'
import { connectActionSheet, ActionSheetProvider } from '@expo/react-native-action-sheet';
import FTCStyledText from '../components/shared_components/FTCStyledText';
import { TextStyles } from '../global/styles/TextStyles'

const { header } = TextStyles;

@connectActionSheet
export class EditProfile extends Component {

  state = {
    image: null
  }

  renderHeader = () => {
    return (
      <FTCStyledText style={header}>تعديل الملف الشخصي</FTCStyledText>
    )
  }

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
        style={styles.button}
        onPress={this.cameraOrAlbumChoice}
      >
        <Text style={{ fontSize: 14 }}>Change Image</Text>
      </TouchableOpacity>
    )
  }

  renderChosenImage = () => {
    return (
      <Image
        style={{ height: 50, width: 50 }}
        source={{ uri: this.state.image }}
      />
    )
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          {this.renderHeader()}
          {this.renderProfileImageChange()}
          {this.state.image === null ? null : this.renderChosenImage()}
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
  }
}

