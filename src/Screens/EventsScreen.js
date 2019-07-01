import React, { Component } from 'react';
import { 
    ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Image, View, RefreshControl} from 'react-native';
import { InfoCardList, FTCStyledText } from '../components';
import Images from '../../assets/images'
import { primaryColor, secondaryColor, getEventList } from "../global";
import { LinearGradient } from 'expo-linear-gradient'

export class EventsScreen extends Component {

    state = {
        available:[],
        registered:[],
        full:[],
        refreshing:false,
        didLoad:false
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

            this.setState({didLoad:true})
        })
    }

    _onRefresh = async () =>{
        this.setState({refreshing:true})
        await this.fetchEvents()
        this.setState({refreshing:false})
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

    renderEmptyListComponent = () =>{
        if(this.state.didLoad)
            return <FTCStyledText style={styles.emptyViewText} > مافيه شيء حالياً </FTCStyledText>
        else
            return null;
    }

    navigateToEventDetails = (event) =>{
        this.props.navigation.navigate("EventDetails", {"id":event.id, "user_status" : event.user_status} )
    }
    renderAvailableProjects() {
        return (
            <InfoCardList
            renderEmptyListComponent={this.renderEmptyListComponent}
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
            renderEmptyListComponent={this.renderEmptyListComponent}
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
            renderEmptyListComponent={this.renderEmptyListComponent}
            onPress={this.navigateToEventDetails}
            title={'مشاريع الممتلئة'}
            listOfData={this.state.full}
            hasLineSeparator={false}
            />
        );
    }
    renderEventList(){
        return(
        <View style={{minHeight:'100%', justifyContent:'space-between'}} >
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
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />}
                    >
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
    },
  emptyViewText: {
    fontFamily:'Cairo-Bold',
    fontSize:15,
    margin:10,
    alignSelf:'center'
  }
  });
