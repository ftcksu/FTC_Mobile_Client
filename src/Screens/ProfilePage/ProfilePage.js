import React, { Component } from 'react';
import {View, Image, TouchableWithoutFeedback, StyleSheet, ScrollView} from 'react-native'
import FTCStyledText from './../../components/FTCStyledText';
import InfoCardList from './../../components/InfoCardList';
import content from './../../dummy_data/InfoCardData.json';
import ImageView from 'react-native-image-view';
import UserData from './../../dummy_data/UserProfile.json';


// const images = [
//   {
//       source: {
//           uri: UserData.image,
//       },
//       title: 'Paris',
//       width: 806,
//       height: 720,
//   },
// ];


export default class ProfilePage extends Component {
  

  constructor() {
    super();
    this.state = {
        isImageViewVisible: false,
        user: UserData,
    };
  }

  renderUserProfile() {
    const images = [
  {
      source: {
          uri: UserData.image,
      }
    },
  ];
    return(
      <View>
    <View style={styles.container}>
      <TouchableWithoutFeedback
      onPress={() => {
        this.setState({
          isImageViewVisible: true,
        });
    }}
      style={styles.imageContainer}
      >
    <Image
      style={styles.profileImage} 
      source={{ uri: 'https://github.com/antonKalinin/react-native-image-view/blob/master/example/assets/spb.jpg?raw=true'}} />
  </TouchableWithoutFeedback>

  <FTCStyledText style={styles.name}>{this.state.user.first_name} {this.state.user.last_name}</FTCStyledText>
    <FTCStyledText style={styles.description}>{this.state.user.description}</FTCStyledText>

    

    <ImageView
      glideAlways
      animationType={'slide'}
      images={images}
      imageIndex={0}
      isVisible={this.state.isImageViewVisible}
      />

        </View>

        <View>
    <InfoCardList
      listOfData={content.data}
      hasLineSeparator={false}
      />
    </View>
    
    </View>
    );
  }

  render() {
    return (
      <View>
        {this.renderUserProfile()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height:128,
    width: 128,
    borderRadius: 64,
    marginLeft: 100,
  },
  profileImage: {
    height:128,
    width: 128,
    borderRadius: 64
  }, name: {
    color:"#333333",
    textAlign: "center",
    fontWeight: 'bold',
    fontFamily:"Cairo-Bold",
    fontSize: 17,
    marginTop:10,
    marginLeft: 10
  }, description: {
    fontFamily:"Cairo-Regular",
    fontSize: 12,
    textAlign: 'center',
    color: '#9e9e9e'
  }
});
