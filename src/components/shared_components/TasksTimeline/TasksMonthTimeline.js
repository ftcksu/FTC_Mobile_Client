import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import FTCStyledText from '../'

export class TasksMonthTimeline extends Component {
  render() {
    return (
      <View style={styles.container} >
      <FlatList
            style={styles.flatView}
            data={this.state.task}
            contentContainerStyle={{ flexGrow: 0 }}
            renderItem={({ item }) => (
            <PointRecordCard style={styles.pointHistoryCard} description = {item.description}  />
            )}/>
        <View style={styles.dateAndLineContainer} >
            <FTCStyledText style={styles.date} >
                {this.state.task.date}
            </FTCStyledText>
            <View style={styles.whiteLine}  />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
       alignItems:'flex-end',
       justifyContent:"flex-end",
       flexDirection:'row',
        marginLeft:30
    },
    flatView:{
        marginTop:30
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
        backgroundColor:'#fff'
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