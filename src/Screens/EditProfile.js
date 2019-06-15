import React, { Component } from 'react'
import { View, SafeAreaView, TouchableOpacity, Text, Image } from 'react-native'
import { ImagePicker, Constants, Permissions } from 'expo'
import FTCStyledText from '../components/shared_components/FTCStyledText';
import { TextStyles } from '../global/styles/TextStyles'

const { header } = TextStyles;

export class EditProfile extends Component {

  componentDidMount() {
    // this.getPermissionAsync()
  }

  state = {
    image: null
  }

  renderHeader = () => {
    return (
      <FTCStyledText style={header}>تعديل الملف الشخصي</FTCStyledText>
    )
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    await this.getPermissionAsync()

    options = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    }

    let result = await ImagePicker.launchImageLibraryAsync(options)

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  }

  renderProfileImageChange = () => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this._pickImage}
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

