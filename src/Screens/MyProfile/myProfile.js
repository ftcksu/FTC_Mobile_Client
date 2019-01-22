import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import ScreenBackground from './screenBackground'
import NameAndImage from './NameAndImage'
import TotalPoints from './TotalPoints'
import FTCStyledText from '../../components/FTCStyledText'

export default class myProfile extends Component {
  render() {
    return (
            <View style={styles.container} >
                <NameAndImage/>
                <TotalPoints/>
            </View>      
    )
  }
}

const styles = StyleSheet.create({
    container: {
       marginTop:30,
       backgroundColor:'cyan',
       height:'100%',
       width:'100%',
       alignItems:'center',
       justifyContent:'space-evenly'
    }
  });
