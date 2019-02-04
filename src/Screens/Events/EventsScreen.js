import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import InfoCardList from '../../components/InfoCardList';
import content from '../../dummy_data/InfoCardData.json';
import { Icon } from 'react-native-elements'
import { AddEvent } from './AddEvent/AddEvent'

export class EventsScreen extends Component {
    renderAvailableProjects() {
        return (
            <InfoCardList
            title={'مشاريع متاحة'}
            listOfData={content.data}
            hasLineSeparator={true}
            />
        );
    }

    renderRegisteredProjects() {
        return (
            <InfoCardList
            title={'تم تسجيلك بها'}
            listOfData={content.data}
            hasLineSeparator={true}
            />
        );
    }

    renderClosedProjects() {
        return (
            <InfoCardList
            title={'مشاريع مغلقة'}
            listOfData={content.data}
            hasLineSeparator={false}
            />
        );
    }
    renderEventList(){
        return(
        <View>
            {this.renderAvailableProjects()}
            {this.renderRegisteredProjects()}
            {this.renderClosedProjects()}
        </View>    
        )
    }

    renderAddEventButton(){
        return(
            <View style={styles.buttonContainer} >
                <Icon
                size={40}
                style={styles.addButton}
                name='ios-add-circle-outline'
                onPress={() => console.log('add icon is pressed')} //TODO
                type='ionicon' />
            </View>
            
        );
    }

    render() {
        return (
          // <ScrollView style={styles.container} >
          //   {this.renderAddEventButton()}
          //   {this.renderEventList()}
          // </ScrollView>
          <View style={styles.container}>
            <AddEvent />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer:{
        flex:1,
        alignItems:"flex-end",
        marginRight:20

    },
    addButton:{
        height:40,
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
    }
  });
