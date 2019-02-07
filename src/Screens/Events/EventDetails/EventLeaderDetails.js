import React, { Component } from 'react'
import { View, Image } from 'react-native'
import FTCStyledText from "../../../components/FTCStyledText";

export default class EventLeaderDetails extends Component {
  render() {
    return (
      <View style={[styles.container,this.props.style]} >
        <Image style={styles.circleImage} source={{uri:this.props.image}} />
        <FTCStyledText style={styles.leaderName} > {this.props.leaderName} </FTCStyledText>
        <FTCStyledText style={styles.subtitle}> قائد المشروع </FTCStyledText>
      </View>
    )
  }
}
const styles = {
    container:{
        alignItems:'center',
        // alignContent:'center'
    },
    circleImage: {
        width: 75,
        height: 75,
        borderRadius: 75/2,
    },
    leaderName:{
        fontFamily:'Cairo-Bold',
        fontSize:15,
    },
    subtitle:{
        fontFamily:'Cairo-Bold',
        fontSize:11,
        color:'#727272'
    }
}