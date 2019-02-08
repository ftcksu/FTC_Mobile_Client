import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import InfoCardList from '../../components/InfoCardList';
import content from '../../dummy_data/InfoCardData.json';
import Images from '../../../assets/images'
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
            <TouchableOpacity style={styles.buttonContainer} >
                <Image resizeMode={'center'} style={styles.floatingActionButtonContent} source={Images.addIcon} />
            </TouchableOpacity>
            
        );
    }

    render() {
        return (
            <View>
                <ScrollView >
                    {this.renderEventList()}
                </ScrollView> 
                {this.renderAddEventButton()}
            </View>
          
        //   <View style={styles.container}>
        //     <AddEvent />
        //   </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer:{
        width: 60,  
        height: 60,   
        borderRadius: 60/2,            
        backgroundColor: '#3986e0',                                    
        position: 'absolute',                                          
        bottom: 0,                                                    
        right: 0,
        marginRight:20,
        marginBottom:20
    },
    floatingActionButtonContent:{
        // height:'40%',
        // width:'40%'
        // backgroundColor:'black'
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
    }
  });
