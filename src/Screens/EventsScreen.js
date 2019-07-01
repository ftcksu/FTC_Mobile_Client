import React, { Component } from 'react';
import { 
    ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Image, View
 } from 'react-native';
import { InfoCardList } from '../components';
import Images from '../../assets/images'
import { primaryColor, secondaryColor, getEventList } from "../global";
import { LinearGradient } from 'expo-linear-gradient'

export class EventsScreen extends Component {

    state = {
        available:[],
        registered:[],
        full:[],
    }

    fetchEvents = () =>{
        getEventList().then(response =>{
            if(response.status == 200){
                this.setState({
                    'available':this.fillEventUserStatus('Lurker' ,response.data.available),
                    'registered':this.fillEventUserStatus('Registered', response.data.registered),
                    'full':this.fillEventUserStatus('Full', response.data.full),
                })
            }
        })
    }


    fillEventUserStatus(status, events){
        return events.map( (item)=>{
            console.log(item);
            if( status == 'Registered' && item.is_leader){
                item.user_status = 'Leader'
            }else
                item.user_status = status
            return item
        } )
        
    }

    componentDidMount(){
        this.fetchEvents();
    }

    navigateToEventDetails = (event) =>{
        this.props.navigation.navigate("EventDetails", {"id":event.id, "user_status" : event.user_status} )
    }
    renderAvailableProjects() {
        return (
            <InfoCardList
            onPress={this.navigateToEventDetails}
            title={'مشاريع متاحة'}
            listOfData={this.state.available}
            hasLineSeparator={true}
            />
        );
    }

    renderRegisteredProjects() {
        return (
            <InfoCardList
            onPress={this.navigateToEventDetails}
            title={'تم تسجيلك بها'}
            listOfData={this.state.registered}
            hasLineSeparator={true}
            />
        );
    }

    renderFullProjects() {
        return (
            <InfoCardList
            onPress={this.navigateToEventDetails}
            title={'مشاريع مغلقة'}
            listOfData={this.state.full}
            hasLineSeparator={false}
            />
        );
    }
    renderEventList(){
        return(
        <View>
            {this.renderAvailableProjects()}
            {this.renderRegisteredProjects()}
            {this.renderFullProjects()}
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
