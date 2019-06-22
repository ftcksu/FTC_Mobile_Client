import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import  {FTCStyledText}  from './';

const cardTypesIcon = [
    require('../../../assets/images/microphone.png'),
    require('../../../assets/images/microphone.png'),
    require('../../../assets/images/microphone.png')
];

const bossIcon = require('../../../assets/images/EventManegerIcon.png');

/*
  values required:
  title, type=STRING (top text, title of the info card)
  subtitle, type=STRING (bottom text, details and subtitle of the component)
  cardTypesIcon, type=STRING either announcment, attend or organize
*/

export class InfoCard extends React.Component {
  render() {
    return (
      <View style={[styles.container,this.props.style]}>

        {this.props.isBoss? <Image 
              source={bossIcon}
              style={styles.bossIcon}
          /> : null
        }

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
    margin: 15,
    borderRadius: 15,
    elevation: 2.5,
    shadowRadius: 1.5,
    shadowOpacity: 0.2,
    shadowOffset: { height: 0, width: 0 }
  },
  cardImage: {
    width: 60, height: 60, alignSelf: 'center', margin: 10, marginStart: 20 
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
    color: '#727272',
    fontFamily: 'Cairo-Regular',
    marginBottom: 5,
    textAlign: 'right',
    fontWeight: 'normal',
    fontSize: 11 
  },
  bossIcon: {
    marginTop: 70,
    marginLeft: 15,
    marginBottom: 7,
    width: 15,
    height: 22,
  }
});
