import React, { Component } from 'react'
import { View, StyleSheet, FlatList, ScrollView } from 'react-native'
import PointPerDayCard from './PointPerDayCard'
import ScreenBackground from '../ScreenBackground'
import FTCStyledText from '../../../components/FTCStyledText'
import { Icon } from 'react-native-elements';


export class History extends Component {
  render() {
    return (
      <ScrollView>
        <ScreenBackground/>
        <View style={styles.container} >
          <View style={styles.topContainer} >
          <View style={styles.emptyLeftView} />
          <FTCStyledText style={styles.title} > تاريخ نقاطك </FTCStyledText>
          
        </View>

        <View style={styles.flatView} >
        
        <View style={styles.dateHighlighter} />
        <FlatList
            data={["this.props.data","this.props.data","this.props.data","this.props.data","this.props.data","this.props.data"]}
            contentContainerStyle={styles.flatListContentContainer}
            renderItem={({ item }) => (
            <PointPerDayCard/>
            )}
        />
        </View>

      </View>
      </ScrollView>

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
    marginTop:30, flexDirection: 'row', width: '100%', justifyContent: 'space-between' 
  },
  emptyLeftView:{
    width:30
  },
  title:{
    fontSize:20,
    fontFamily:'Cairo-Bold',
    color:'white',
    alignSelf:"center"
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
    marginRight:10
  },
  flatListContentContainer:{ 
    flexGrow: 0,paddingBottom:25
  }
});