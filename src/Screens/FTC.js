import React from 'react';
import { StyleSheet, View, } from 'react-native';
import * as Font from 'expo-font'
import Navigator from '../Navigator'
import Login from './LoginScreen'
import { getToken, deleteToken } from '../global/actions/LocalStorage'

export default class FTC extends React.Component {

  state = {
    fontHasLoaded: false,
    isLoggedIn: false
  }

  componentWillMount() {
    this._loadFont()
    this._checkLogin()
    // deleteToken().then(() => {
    //   this.setState({ isLoggedIn: false });
    // })
  }

  userLoggedIn = () => {
    this.setState({isLoggedIn: true})
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

  _checkLogin = () => {

    getToken().then(token => {
      
      this.setState({ isLoggedIn: token }); // if he's logged in, token will be a string, meaning (true) if not, it will be null, meaning (false)
    })
  

  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.fontHasLoaded ? (this.state.isLoggedIn ? <Navigator/> : <Login onLogin={this.userLoggedIn} /> ) : null
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
