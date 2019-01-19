import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { FTCStyledText } from '../components/FTCStyledText';
import data from '../dummy_data/UserPointCardData'; // instead of having data in the same file

// const data={
//   'image':'https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg',
//   'postion': 1,
//   'name':'يوسف العبدلي',
//   'bio':'ماسويت شيء غلط',
//   'points':420
// }

//TODO: Add the crown vector on selected users

/*
                            Props:
                  points, name, bio, imageURL
*/

export class UserPointCard extends React.Component {
  props = data;
  render() {
    return ( 
        <View style={styles.container}>

        <FTCStyledText style={styles.points} >
        {this.props.points}
        </FTCStyledText>

        <View style={styles.nameAndBioContainer}>
          <FTCStyledText style={styles.name}>
            {this.props.name}
          </FTCStyledText>
      
          <FTCStyledText style={styles.bio}>
            {this.props.bio}
          </FTCStyledText>
        </View>

        <Image style={styles.circleImage} source={{ uri: this.props.imageURL }} />

        <FTCStyledText style={styles.position} >
          {this.props.position}
        </FTCStyledText>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
      justifyContent: 'flex-end',
      flexDirection: 'row'
      
    },
    postion: { //font should be Cairo Bold
      color: '#c7c7c7',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 35,
      margin: 10
  },
    circleImage: {
      width: 75,
      height: 75,
      borderRadius: 75 / 2
  },
    nameAndBioContainer: {
      justifyContent: 'flex-start',
      flexDirection: 'column',
      margin: 10,
      marginRight: 20,
      flex: 0.9
    },
    name: { //font should be Cairo Bold
      color: '#333333',
      marginBottom: 5,
      textAlign: 'right',
      fontWeight: 'bold',
      fontSize: 19
    },
    bio: { //font should be Cairo Regular
      color: '#9e9e9e',
      marginBottom: 5,
      textAlign: 'right',
      fontWeight: 'normal',
      fontSize: 14 
    },
    points: {
      paddingTop: 7,
      color: '#4a67d2',
      textAlignVertical: 'top',
      fontWeight: 'bold',
      fontSize: 27,
      marginTop: 10
    }
  });
