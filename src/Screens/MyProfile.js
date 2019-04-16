import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import ScreenBackground from '../components/shared_components/ScreenBackground'
import NameAndImage from '../components/shared_components/NameAndImage'
import TotalPoints from '../components/local_components/MyProfile/TotalPoints'
import DoubleLineChart from '../components/local_components/MyProfile/DoubleLineChart'

export class MyProfile extends Component {
  
  onPress=()=>{
    this.props.navigation.navigate("History")
  }
  
  render() {
    return (
      <View>
        <ScreenBackground/>
        <View style={styles.container}  >

          <NameAndImage src='https://i.imgur.com/I4bcBnY.jpg' name='ابو حاتم'/>

          <TouchableOpacity onPress={this.onPress} >
            <TotalPoints/>
          </TouchableOpacity>

          <View style={styles.chart} >
              <DoubleLineChart/>  
          </View>

        </View>

      </View>      
    )
  }
}

const styles = StyleSheet.create({
    container: {
       height:"100%",
       width:"100%",
       alignItems:'center',
       justifyContent:'space-evenly',

    },
    chart: {
      height:'30%',
      width:'100%',
    }
  });
