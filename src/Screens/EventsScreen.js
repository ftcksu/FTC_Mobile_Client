import React, { Component } from 'react';
import { 
    ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Image, View
 } from 'react-native';
import { InfoCardList } from '../components';
import content from '../dummy_data/InfoCardData.json';
import Images from '../../assets/images'
import { primaryColor, secondaryColor } from "../global/Constants";
import { LinearGradient } from 'expo-linear-gradient'



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
            <LinearGradient colors={[primaryColor, secondaryColor]} style={styles.buttonContainer} >
                <TouchableOpacity onPress={this.handelAddEventPress}  >
                    <Image
                    resizeMode={'center'}
                    source={Images.addIcon}
                    style={styles.floatingActionButtonContent}
                    />
                </TouchableOpacity>
            </LinearGradient>
            
        );
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    {this.renderEventList()}
                </ScrollView> 
                {this.renderAddEventButton()}
            </SafeAreaView>
          
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
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 60/2,            
        position: 'absolute',                                          
        bottom: 0,                                                    
        right: 0,
        marginRight:20,
        marginBottom:20
    },
    floatingActionButtonContent:{
        alignSelf: 'center'
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
    }
  });
