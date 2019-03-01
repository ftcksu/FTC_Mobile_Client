import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { Font } from 'expo';
import Navigator from '../Navigator'

export default class FTC extends React.Component {

  state = {
    fontHasLoaded: false,
  }

  componentWillMount() {
    this._loadFont()
  }

  _loadFont = () => {
    Font.loadAsync({
      'Cairo-Bold': require('../../assets/fonts/Cairo-Bold.ttf'),
      'Cairo-SemiBold': require('../../assets/fonts/Cairo-SemiBold.ttf'),
      'Cairo-Light': require('../../assets/fonts/Cairo-Light.ttf'),
      'Cairo-Regular': require('../../assets/fonts/Cairo-Regular.ttf'),
      'Cairo-Black': require('../../assets/fonts/Cairo-Black.ttf'),
      'Cairo-ExtraLight': require('../../assets/fonts/Cairo-ExtraLight.ttf'),
    })
      .then(() => {
        this.setState({ fontHasLoaded: true })
      })
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.fontHasLoaded ? <Navigator /> : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    // marginTop:30
  }
});
