import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { ScreenBackground, NameAndImage, TotalPoints, DoubleLineChart } from '../components'

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
