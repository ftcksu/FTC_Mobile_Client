import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { Font } from 'expo';
import InfoCardList from './components/InfoCardList';
import appReducer from './src/reducers';
import fontLoaded from './src/actions';

const content = {
  'title': 'أحدث المشاريع',
  'data': [
    {
      'title': "هاكاثون المستقبل النسخة الثانية",
      'subTitle': "حلول تقنية تساعد الملتحقين بالجامعة من طلاب وأعضاء هيئة التدريس",
      'type': "announcement",
      'key': 1
    },
    {
      'title': "هاكاثون المستقبل النسخة الثانية",
      'subTitle': "حلول تقنية تساعد الملتحقين بالجامعة من طلاب وأعضاء هيئة التدريس",
      'type': "announcement",
      'key': 2
    },
    {
      'title': "هاكاثون المستقبل النسخة الثانية",
      'subTitle': "حلول تقنية تساعد الملتحقين بالجامعة من طلاب وأعضاء هيئة التدريس",
      'type': "announcement",
      'key': 3
    }
  ]
};

class App extends React.Component {
  // state = {
  //   fontLoaded: false,
  // }

  async componentDidMount() {
    await Font.loadAsync({
      'Cairo-Bold': require('./assets/fonts/Cairo-Bold.ttf'),
      'Cairo-SemiBold': require('./assets/fonts/Cairo-SemiBold.ttf'),
      'Cairo-Light': require('./assets/fonts/Cairo-Light.ttf'),
      'Cairo-Regular': require('./assets/fonts/Cairo-Regular.ttf'),
      'Cairo-Black': require('./assets/fonts/Cairo-Black.ttf'),
      'Cairo-ExtraLight': require('./assets/fonts/Cairo-ExtraLight.ttf'),
    });

    this.props.fontLoaded();
    console.log(this.props.fontHasLoaded);
  }

  render() {
    // note that Provider tag can only take one child component.
    // wrap with view tag if there's more than one.

    return (
      <Provider store={createStore(appReducer)}>
        <View>
          this.state.fontLoaded ? <View style={styles.container}>
            <InfoCardList title={content.title} listOfData={content.data} hasLineSeparator />
          </View>:null
        </View>
      </Provider>
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

export default connect(mapStateToProps, fontLoaded)(App);
