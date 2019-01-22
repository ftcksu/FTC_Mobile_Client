import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import FTCStyledText from '../../components/FTCStyledText'

export default class NameAndImage extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Image style={styles.image} source={ {uri:"https://pbs.twimg.com/media/COuih_uWwAAs8ZE.png" }}/>
        <FTCStyledText style={styles.text} > عبدالمحسن العنزي </FTCStyledText>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    },
    image:{
        width: 120,
        height: 120,
        borderRadius: 120/2,
        justifyContent: "flex-end"
        },
    text:{
        color:'white',
        marginTop:15,
        fontFamily: 'Cairo-Bold',
        fontSize: 15
    }
  });

