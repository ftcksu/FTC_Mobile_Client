import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { ScreenBackground, NameAndImage, TotalPoints, DoubleLineChart } from '../components'
import { getLoggedInUserInfo } from '../global'
import { ScrollView } from 'react-native-gesture-handler';

export class MyProfile extends Component {

  state = {
    user :{
      first_name:'',
      last_name:'',
      total_points:'',
      profilephoto_full_link:''
    },
    tasks:{}
  }

  componentDidMount(){
    getLoggedInUserInfo().then((response) => {
      this.setState({
        user:response.data.user,
        tasks:response.data.tasks,
      })
    }).catch(error => console.log('error: ' ,error))
  }
  
  onPress=()=>{
    this.props.navigation.navigate("History", {"tasks":this.state.tasks})
  }

  renderNameAndImage(){
    return(
      <NameAndImage
              imageStyle={styles.profilePhoto}
              src={this.state.user.profilephoto_full_link}
              name={this.state.user.first_name +' '+ this.state.user.last_name} 
              titleStyle={styles.username} />
    )
  }

  renderTotalPoints(){
    return  <TouchableOpacity style = {styles.totalPointsContainer} onPress={this.onPress} >
              <TotalPoints points= {this.state.user.total_points} />
            </TouchableOpacity>
  } 

  renderChart(){
    return  <View style={styles.chart} >
              <DoubleLineChart/>  
            </View>
  }
  
  render() {
    console.log(this.state.user);
    return (
      <View>
        <ScreenBackground/>
          <SafeAreaView style={styles.container}  >
            {this.renderNameAndImage()}
            {this.renderTotalPoints()}
            {this.renderChart()}
            </SafeAreaView>
        </View>      
    ) 
  }
}

const styles = StyleSheet.create({
    container: {
       height:"100%",
       width:"100%",
       alignItems:'center',
       justifyContent:'space-around',

    },
    chart: {
      flex:1,
      height:'30%',
      width:'100%',
    },
    username:{
      fontSize:20,
      color: 'white'
    },
    profilePhoto: {
      width: 150,
      height:150,
      borderRadius: 150/2 ,
    },
    totalPointsContainer:{
      flex:1,
      justifyContent:'center',

    }
  });
