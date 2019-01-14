import React from 'react';
import { StyleSheet, View } from 'react-native';
import  InfoCardList  from './components/InfoCardList'
import { InfoCard } from './components/InfoCard'


const content = {
    'title'  : 'أحدث المشااريع',
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
  
  render() {
    return (
      <View style={styles.container}>
        <InfoCardList title={content.title} listOfData={content.data} hasLineSeparator={true} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection:'column',
  }
});
