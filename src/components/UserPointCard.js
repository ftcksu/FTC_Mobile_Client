import React from 'react';
import { View, Image, StyleSheet, ImageBackground } from 'react-native'
import FTCStyledText from '../components/FTCStyledText'
const data={
  "image":"https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
  "postion": 1,
  "name":"يوسف العبدلي",
  "bio":"ماسويت شيء غلط",
  "points":420
}


/*
                            Props:
                  points, name, bio, imageURL, position


*/
export default class UserPointCard extends React.Component {
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
          <Image style={styles.circleImage} source={require('../../assets/images/crowns.png')} />
        </ImageBackground>

        <FTCStyledText style={styles.position} >
          {this.props.position}
        </FTCStyledText>

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
      margin:10,
      justifyContent: 'flex-end',
      flexDirection: 'row',
      alignItems:"center"
      
    },
    position: {
      color:"#c7c7c7",
      textAlign:'center',
      fontWeight: 'bold',
      fontSize:35,
      margin:10,
      fontFamily:"Cairo-Bold",
      textAlign:"center"
  },
    imagesContainer:{
      width: 60,
      height: 60,
      borderRadius: 60/2,
      justifyContent:"flex-end"
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
      margin:10,
      marginRight:20,
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
