      import React, { Component } from 'react';
      import {View, Image, TouchableWithoutFeedback, StyleSheet, ScrollView} from 'react-native'
      import FTCStyledText from './../src/components/FTCStyledText'
      import InfoCardList from './../src/components/InfoCardList';
      import content from './../src/dummy_data/InfoCardData.json';
      import ImageView from 'react-native-image-view';


      const images = 
        {
            source: {
                uri: 'https://github.com/antonKalinin/react-native-image-view/blob/master/example/assets/spb.jpg?raw=true',
            },
            title: 'Paris',
            width: 806,
            height: 720,
        };



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

        <FTCStyledText style={styles.name}>ناويف الكعيد</FTCStyledText>
          <FTCStyledText style={styles.description}>ناويف الكعيد انسان حكير وما يعرف يكتب اسامي</FTCStyledText>

          

        <ImageView
                          glideAlways
                          animationType="fade"
                          image={images}
                          isVisible={isImageViewVisible}
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
