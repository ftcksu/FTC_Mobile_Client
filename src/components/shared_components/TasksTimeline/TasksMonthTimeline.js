import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import {FTCStyledText, TaskCard} from '../'

export class TasksMonthTimeline extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.isLast ? styles.lastElement:null]} >
        <View style={styles.dateAndLineContainer} >
              <FTCStyledText style={styles.date} >
                  {this.props.data.date}
              </FTCStyledText>
              <View style={styles.whiteLine}  />
              {this.props.isLast ? <View style={styles.whiteCircle}/> : null }
          </View>
      <FlatList
            style={styles.flatView}
            data={this.props.data.tasks}
            contentContainerStyle={{ flexGrow: 0, alignSelf: 'center' }}
            renderItem={({ item }) => (
            <TaskCard style={styles.pointHistoryCard} description = {item.description}  />
              )}
            />
          
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      width:'76%', //magic DO NOT TOUCH
       justifyContent:"flex-start",
       flexDirection:'row',
    },
    lastElement:{
      marginBottom:10
    },
    flatView:{
        marginTop:30,
    },
    dateAndLineContainer:{
        alignItems:'center',
       justifyContent:"center",
       flexDirection:'column',
       width:'30%',
       
    },
    whiteLine:{
        width:5,
        flex:1,
        backgroundColor:'#fff',
    },
    whiteCircle:{
      width:10,
      marginTop:-1,
      height:10,
      borderRadius:10,
      backgroundColor:'#fff',
  },
    pointHistoryCard:{
        width:"70%"
    },
    date:{
        fontFamily:'Cairo-Bold',
        fontSize:18,
        color:'white'
    }
  });