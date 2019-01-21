import React, { Component } from 'react';
import ImageView from './components/ImageView/ImageView'


const images = [
  {
      source: {
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwWG4TnLQdKpOBgDZ3u8Ywf5p8kKfQSeFUPu-O0d0DICkjTNBvQ',
      },
      title: 'Paris',
      width: 806,
      height: 720,
  },
];



export default class ProfilePage extends Component {
  

  constructor() {
    super();
    this.state = {
        isImageViewVisible: false,
    };
  }

  render() {
    const {isImageViewVisible} = this.state;

    return (
      /*
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      */
     /*
     <View style={styles.container}>
       <ImageLoader 
        source={{ uri: 'https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg'}}
        style={styles.image}
       />
     </View>
     */
    <View>
    <TouchableWithoutFeedback
    onPress={() => {
      this.setState({
        isImageViewVisible: true,
      });
  }}
    >
    <Image
      style={styles.profileImage} 
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwWG4TnLQdKpOBgDZ3u8Ywf5p8kKfQSeFUPu-O0d0DICkjTNBvQ'}} />
  </TouchableWithoutFeedback>

  <ImageView
                    glideAlways
                    animationType="fade"
                    images={images}
                    imageIndex={0}
                    isVisible={isImageViewVisible}
                />

        </View>
    );
  }
}

