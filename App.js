import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Font } from 'expo'
import InfoCardList from './components/InfoCardList'
const content = {
  'title'  : 'أحدث المشاريع',
  'data': [
    {
      'title':"هاكاثون المستقبل النسخة الثانية",
      'subTitle': "حلول تقنية تساعد الملتحقين بالجامعة من طلاب وأعضاء هيئة التدريس",
      'type': "announcement",
      'key':1
    },
    {
      'title':"هاكاثون المستقبل النسخة الثانية",
      'subTitle': "حلول تقنية تساعد الملتحقين بالجامعة من طلاب وأعضاء هيئة التدريس",
      'type': "announcement",
      'key':2
    },
    {
      'title':"هاكاثون المستقبل النسخة الثانية",
      'subTitle': "حلول تقنية تساعد الملتحقين بالجامعة من طلاب وأعضاء هيئة التدريس",
      'type': "announcement",
      'key':3
    }
  ]
};
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
      
        this.state.fontLoaded ? <View style={styles.container}>
        <InfoCardList title={content.title} listOfData={content.data} hasLineSeparator={true} />
      </View>:null
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    justifyContent: 'center',
    flexDirection:'column',
  }
});
