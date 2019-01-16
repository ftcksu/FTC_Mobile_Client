import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Font } from 'expo';
import InfoCardList from './components/InfoCardList';
import fontLoaded from './actions';
import content from './dummy_data/InfoCardData.json';

class FTC extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      'Cairo-Bold': require('../assets/fonts/Cairo-Bold.ttf'),
      'Cairo-SemiBold': require('../assets/fonts/Cairo-SemiBold.ttf'),
      'Cairo-Light': require('../assets/fonts/Cairo-Light.ttf'),
      'Cairo-Regular': require('../assets/fonts/Cairo-Regular.ttf'),
      'Cairo-Black': require('../assets/fonts/Cairo-Black.ttf'),
      'Cairo-ExtraLight': require('../assets/fonts/Cairo-ExtraLight.ttf'),
    });

    this.props.fontLoaded();
    console.log(this.props.fontHasLoaded);
  }

  render() {
    // note that Provider tag can only take one child component.
    // wrap with view tag if there's more than one.

    return (
        <View>
          this.state.fontLoaded ? <View style={styles.container}>
            <InfoCardList title={content.title} listOfData={content.data} hasLineSeparator />
          </View>:null
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    justifyContent: 'center',
    flexDirection: 'column',
  }
});


const mapStateToProps = (state) => {
    const { fontHasLoaded } = state.appReducer;
    return { fontHasLoaded };
  };

export default connect(mapStateToProps, fontLoaded)(FTC);
  