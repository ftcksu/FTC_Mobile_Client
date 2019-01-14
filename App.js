import React from 'react';
import { StyleSheet, FlatList, View, Image } from 'react-native';
import { FTCStyledText } from './components/FTCStyledText'
import { InfoCard } from './components/InfoCard'
const cardTypesIcon={
  "announcement":require('./assets/images/microphone.png'),
    "attend":require('./assets/images/microphone.png'),
  "organize":require('./assets/images/microphone.png')
}
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
        <FTCStyledText style={styles.listTitle} >
          {content.title}
        </FTCStyledText>
        <FlatList
        style={styles.flatView}
        data={content.data}
        contentContainerStyle={{ flexGrow: 0 }}
        renderItem={({ item }) => (
          <InfoCard
            title={item.title}
            subtitle={item.subTitle}
            cardTypesIcon={item.type}
          />
        )}/> 
        <View style={styles.lineBreak}  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection:'column',
    margin: 20
  },
  listTitle:{
    textAlign:"center",
    fontSize: 30,
    fontWeight:'bold'
  },
  lineBreak:{
    width:"100%" ,
    height:5,
    backgroundColor:"#eeeeee",
    marginRight:20,

  },
  flatView:{
    flexGrow:0
  }
});
