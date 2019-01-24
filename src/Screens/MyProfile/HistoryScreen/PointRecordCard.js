import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import FTCStyledText from '../../../components/FTCStyledText'
import { Icon } from 'react-native-elements';

export default class PointRecordCard extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Icon
            style={styles.icon}
            name='ios-information-circle'
            type='ionicon'
            color='#fff'
        />

        <FTCStyledText style={styles.text} > {60+"+ نقطة"} </FTCStyledText>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        width:"100%",
       alignItems:'center',
       justifyContent:"space-evenly",
       flexDirection:'row',
    },
    text:{
        alignSelf:'center',
        fontFamily:'Cairo-Bold',
        fontSize:18,
        color:'white',
        // width:'50%'

    },
    icon:{
        // width:'50%'
    }
  });