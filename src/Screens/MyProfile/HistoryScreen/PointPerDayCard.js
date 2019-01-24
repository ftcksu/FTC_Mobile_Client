import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import FTCStyledText from '../../../components/FTCStyledText'
import PointRecordCard from './PointRecordCard'

export default class componentName extends Component {
  render() {
    return (
      <View style={styles.container} >

      <FlatList
            style={styles.flatView}
            data={["this.props.data","this.props.data","this.props.data"]}
            contentContainerStyle={{ flexGrow: 0 }}
            renderItem={({ item }) => (
            <PointRecordCard style={styles.pointHistoryCard}  />
            )}/>

        <View style={styles.dateAndLineContainer} >
            <FTCStyledText style={styles.date} >
                20 DEC
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