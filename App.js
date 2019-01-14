import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Font } from 'expo'

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Cairo-Bold': require('./assets/fonts/Cairo-Bold.ttf'),
      'Cairo-SemiBold': require('./assets/fonts/Cairo-SemiBold.ttf'),
      'Cairo-Light': require('./assets/fonts/Cairo-Light.ttf'),
      'Cairo-Regular': require('./assets/fonts/Cairo-Regular.ttf'),
      'Cairo-Black': require('./assets/fonts/Cairo-Black.ttf'),
      'Cairo-ExtraLight': require('./assets/fonts/Cairo-ExtraLight.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
      {
        this.state.fontLoaded ?
          <Text style={{ fontFamily: 'Cairo-Bold' }}>FTC your uncle</Text>
        : null
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
