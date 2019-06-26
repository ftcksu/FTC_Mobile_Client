import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { ScreenBackground, NameAndImage, TotalPoints, DoubleLineChart } from '../components'
import { getLoggedInUserInfo } from '../global'

export class MyProfile extends Component {

  state = {
    user :{
      first_name:'',
      last_name:'',
      total_points:''
    },
    tasks:{}
  }

  componentDidMount(){
    getLoggedInUserInfo().then((response) => {
      this.setState({
        user:response.data.user,
        tasks:response.data.tasks,
      })
      console.log('getLoggedInUserInfo: ', response);
    }).catch(error => console.log('error: ' ,error))
  }
  
  onPress=()=>{
    this.props.navigation.navigate("History", {"tasks":this.state.tasks})
  }
  
  render() {
    return (
      <View>
        <ScreenBackground/>
        <View style={styles.container}  >

          <NameAndImage src={this.state.user.profilephoto_full_link} name={this.state.user.first_name +' '+ this.state.user.last_name}/>

          <TouchableOpacity onPress={this.onPress} >
            <TotalPoints points= {this.state.user.total_points} />
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
