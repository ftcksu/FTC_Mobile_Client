import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import images from '../../../assets/images'
import  {FTCStyledText}  from './';
import { LinearGradient } from 'expo-linear-gradient'
import { primaryColor, secondaryColor } from '../../global'
const cardTypesIcon = [ //TODO: add appropriate icons
  images.organize_1,
  images.calenderIcon
  // images.organize_2,
  // images.organize_1,
];

const bossIcon = require('../../../assets/images/EventManegerIcon.png');

/*
  values required:
  title, type=STRING (top text, title of the info card)
  subtitle, type=STRING (bottom text, details and subtitle of the component)
  cardTypesIcon, type=STRING either announcment, attend or organize
*/

export class InfoCard extends React.Component {

  renderIcon = () =>(
    <LinearGradient style={styles.gradientIconContainer} colors={[primaryColor, secondaryColor]} >
      <Image
          source={
            this.props.cardTypesIcon == 'ORGANIZE' ? cardTypesIcon[0] : cardTypesIcon[1]
          }
          style={styles.iconImage}
        />
    </LinearGradient>
  )
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
      
        <FTCStyledText numberOfLines={2} style={styles.subTitle}>
          {this.props.subtitle}
        </FTCStyledText>
        </View>
        {this.renderIcon()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container:{
    backgroundColor: '#eeeeee',
    flexDirection: 'row',
    alignContent: 'flex-end',
    alignItems:'center',
    margin: 15,
    borderRadius: 15,
    elevation: 2.5,
    shadowRadius: 1.5,
    shadowOpacity: 0.2,
    shadowOffset: { height: 0, width: 0 }
  },
  iconImage: {
    width: 30, height: 30, alignSelf: 'center', tintColor:'white'
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
  },
  gradientIconContainer: {
    width: 60,
    height: 60,
    borderRadius:60/2,
    justifyContent:'center',
    marginRight:10
  }
});
