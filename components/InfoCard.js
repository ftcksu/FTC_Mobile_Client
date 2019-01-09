import React from 'react';
import { View, Image, StyleSheet } from 'react-native'
import {FTCStyledText} from './FTCStyledText'

const cardTypesIcon={
    "announcment":require('../assets/images/microphone.png'),
    "attend":require('../assets/images/microphone.png'),
    "organize":require('../assets/images/microphone.png')
}
export class InfoCard extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
        <FTCStyledText style={styles.title} >
        {this.props.title}
        </FTCStyledText>
        <FTCStyledText style={styles.subTitle}>
          {this.props.subTitle}
        </FTCStyledText>
        </View>
        <Image source={
            cardTypesIcon[this.props.iconType]
        }
         style={styles.cardImage} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#eeeeee' , flexDirection: 'row', alignContent: 'flex-end', margin:20, borderRadius:15,
    elevation:2.5,
    shadowRadius: 5,
    shadowOpacity: 1.0 
    
  },
  cardImage:{
    width: 75, height: 75, alignSelf: "center", margin:10, marginStart:20 
  },
  textContainer:{
    flex: 1, justifyContent: 'flex-start', flexDirection: 'column', margin:10
  },
  title:{
    marginBottom:5,
    textAlign:'right',
    fontWeight: 'bold',
    fontSize:15
  },
  subTitle:{
    marginBottom: 5,
    textAlign:'right',
    fontWeight: 'normal',
    fontSize:11 
  }
});
