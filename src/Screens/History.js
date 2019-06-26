import React, { Component } from 'react'
import { View, StyleSheet, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { TasksMonthTimeline, ScreenBackground, FTCStyledText, TasksTimeline} from "../components";
import Images from "../../assets/images";

export class History extends Component {

  state= {
    tasks:this.props.navigation.state.params.tasks
  }
  onCancelPress=()=>{
    this.props.navigation.pop()
  }

  renderHeader = () => {
    return (
      <SafeAreaView style={styles.topContainer} >
          <View style={styles.emptyLeftView} />
          <FTCStyledText style={styles.title} > تاريخ أعمالك </FTCStyledText>
          <TouchableOpacity onPress={this.onCancelPress}>
            <Image source={Images.cancel} style={styles.icon} />
          </TouchableOpacity>
      </SafeAreaView>
    )
  }
  

  render() {
    return (
      <View style={{flex:1}} >
        <ScreenBackground/>
        <TasksTimeline tasks={this.state.tasks} header = {this.renderHeader} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height:"100%",
    width:"100%",
    flex:0,
    marginTop:15
  },
  topContainer:{
     flexDirection: 'row', width: '100%', justifyContent: 'space-between' 
  },
  emptyLeftView:{
    width:35,
    marginLeft:10
  },
  title:{
    flex:1,
    fontSize:20,
    fontFamily:'Cairo-Bold',
    color:'white',
    textAlign:'center',

  },
  flatView:{
    paddingLeft:10,
    marginTop:20
  },
  dateHighlighter:{
    opacity:0.2,
    backgroundColor:'white',
    height: '100%',
    width:"30%",
    borderRadius:120/2,
    position:"absolute",
    top:0,
    right:0,
    marginTop:-10,
  },
  icon: {
    marginRight:10,
    height:35,
    width:35
  },
  flatListContentContainer:{ 
    flexGrow: 0,paddingBottom:25
  }
});