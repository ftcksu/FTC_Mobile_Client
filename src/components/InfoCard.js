import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { FTCStyledText } from './FTCStyledText';

const cardTypesIcon = [
    require('../../assets/images/microphone.png'),
    require('../../assets/images/microphone.png'),
    require('../../assets/images/microphone.png')
];

/*
  values required:
  title, type=STRING (top text, title of the info card)
  subtitle, type=STRING (bottom text, details and subtitle of the component)
  cardTypesIcon, type=STRING either announcment, attend or organize
*/

export class InfoCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
      
        <FTCStyledText style={styles.title} >
          {this.props.title}
        </FTCStyledText>
      
        <FTCStyledText style={styles.subTitle}>
          {this.props.subtitle}
        </FTCStyledText>
      
        </View>
        <Image
          source={
            this.props.cardTypesIcon == 'attend' ? cardTypesIcon[0] : cardTypesIcon[1]
          }
          style={styles.cardImage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container:{
    backgroundColor: '#eeeeee',
    flexDirection: 'row',
    alignContent: 'flex-end',
    margin: 20,
    borderRadius: 15,
    elevation: 2.5,
    shadowRadius: 5,
    shadowOpacity: 1.0 
    
  },
  cardImage: {
    width: 75, height: 75, alignSelf: 'center', margin: 10, marginStart: 20 
  },
  textContainer: {
    flex: 1, justifyContent: 'flex-start', flexDirection: 'column', margin: 10
  },
  title: {
    fontFamily: 'Cairo-Bold',
    marginBottom: 5,
    textAlign: 'right',
    fontSize: 11
  },
  subTitle: {
    fontFamily: 'Cairo-Regular',
    marginBottom: 5,
    textAlign: 'right',
    fontWeight: 'normal',
    fontSize: 11 
  }
});
