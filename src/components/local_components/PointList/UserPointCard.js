import React from 'react';
import { View, Image, StyleSheet, ImageBackground } from 'react-native'
import { FTCStyledText } from '../../shared_components'
import images from "../../../../assets/images";

/*
                            Props:
                  points, name, bio, imageURL, position
*/
export class UserPointCard extends React.Component {

  getTierImage = () => {
    const numOfUsers = this.props.totalUsers
    const position = this.props.position
    
    const numUsersInTopTier = 3;
    if(position <= numUsersInTopTier)
      return images.user_tier_1
    if(position <= numOfUsers * 0.25)
      return images.user_tier_2
    if(position <= numOfUsers * 0.5)
      return images.user_tier_3
    if(position <= numOfUsers * 0.75)
      return images.user_tier_4
    else
      return images.user_tier_5

  }

  state = {
    icon: this.getTierImage()
  }
  render() {
    return( 
      <View>
        <View style={styles.ChildContainer}>

        <FTCStyledText style={styles.points} >
        {this.props.points }
        </FTCStyledText>

        <View style={styles.nameAndBioContainer}>

          <FTCStyledText style={styles.name}>
            {this.props.name}
          </FTCStyledText>

          <FTCStyledText style={styles.bio}>
            {this.props.bio}
          </FTCStyledText>

        </View>

        <ImageBackground style={styles.imagesContainer} imageStyle={styles.imagesContainer} source={{uri:this.props.imageURL }} >
          <Image style={styles.circleImage} source={this.state.icon} />
        </ImageBackground>

        <View style={styles.positionContainer} >
          <FTCStyledText style={styles.position} >
            {this.props.position}
          </FTCStyledText>
        </View>

        </View>

        <View style={styles.lineBreak} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{

  },
    ChildContainer:{
      margin:7,
      justifyContent: 'flex-end',
      flexDirection: 'row',
      alignItems:"center"
      
    },
    position: {
      color:"#c7c7c7",
      fontWeight: 'bold',
      fontSize:25,
      fontFamily:"Cairo-Bold",
      textAlign:"center"
  },
  positionContainer:{
    width:"13%",

  },
    imagesContainer:{
      width: 60,
      height: 60,
      borderRadius: 60/2,
      justifyContent:"flex-end",
      marginRight: -8,
      },
    circleImage: {
      alignSelf:"baseline",
      width: 23,
      height: 23,
      borderRadius: 23/2,
  },
    nameAndBioContainer:{
      justifyContent: 'flex-start',
      flexDirection: 'column',
      margin:0,
      marginRight:20,
      marginLeft: 5,
      flex:1
    },
    name:{ //font should be Cairo Bold
      color:"#333333",
      marginBottom:5,
      textAlign:'right',
      fontFamily:"Cairo-Bold",
      fontSize: 17
    },
    bio:{ //font should be Cairo Regular
      color:"#9e9e9e",
      marginBottom: 5,
      textAlign:'right',
      fontFamily:"Cairo-Regular",
      fontSize:12 
    },
    points:{
      color:"#4a67d2",
      textAlign: "center",
      fontWeight: 'bold',
      fontSize:21,
      marginTop:10,
      marginLeft: 10
    },
    lineBreak:{
      alignSelf:"center",
      width:"80%" ,
      height:2,
      backgroundColor:"#eeeeee",
    },
  });