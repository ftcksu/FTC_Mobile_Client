import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import InfoCardList from '../components/shared_components/InfoCardList';
import content from '../dummy_data/InfoCardData.json';
import Images from '../../assets/images'
import { AddEvent } from './AddEvent'

export class EventsScreen extends Component {

    navigateToEventDetails = () =>{
        this.props.navigation.navigate("EventDetails")
    }
    renderAvailableProjects() {
        return (
            <InfoCardList
            onPress={this.navigateToEventDetails}
            title={'مشاريع متاحة'}
            listOfData={content.data}
            hasLineSeparator={true}
            />
        );
    }

    renderRegisteredProjects() {
        return (
            <InfoCardList
            onPress={this.navigateToEventDetails}
            title={'تم تسجيلك بها'}
            listOfData={content.data}
            hasLineSeparator={true}
            />
        );
    }

    renderClosedProjects() {
        return (
            <InfoCardList
            onPress={this.navigateToEventDetails}
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

    handelAddEventPress = () =>{
        this.props.navigation.navigate("AddEvent");
    }
    renderAddEventButton(){
        return(
            <TouchableOpacity onPress={this.handelAddEventPress} style={styles.buttonContainer} >
                <Image
                resizeMode={'center'}
                source={Images.addIcon}
                style={styles.floatingActionButtonContent}
                />
            </TouchableOpacity>
            
        );
    }

    render() {
        return (
            <View>
                <ScrollView style={{marginTop:30}} >
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
        alignSelf: 'center'
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
    }
  });
