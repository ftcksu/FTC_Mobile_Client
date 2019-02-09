import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import  FTCStyledText  from './FTCStyledText';
import Images from './../../assets/images'




/*
  values required:
  title, type=STRING (top text, title of the info card)
  subtitle, type=STRING (bottom text, details and subtitle of the component)
  cardTypesIcon, type=STRING either announcment, attend or organize
*/

export default class ActionsCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.textContainer}>
      
        <FTCStyledText style={styles.title} >
          {this.props.title}
        </FTCStyledText>
      
        </View>
        <Image
          source={
            this.props.cardTypesIcon == 'recordPoints' ? Images.recordPoints : Images.sendNotification
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
    marginTop: 15,
    marginBottom: 15,
    elevation: 2.5,
  },
  cardImage: {
    width: 35, height: 35, alignSelf: 'center', margin: 10, marginRight: 30
  },
  textContainer: {
    flex: 1, justifyContent: 'center', flexDirection: 'column', margin: 10
  },
  title: {
    fontFamily: 'Cairo-Bold',
    textAlign: 'right',
    fontSize: 15,
    justifyContent: 'center',
  },
});
