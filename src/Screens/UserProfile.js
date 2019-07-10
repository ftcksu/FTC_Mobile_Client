import React, { Component } from 'react'
import { View, StyleSheet, SafeAreaView, ActivityIndicator, Dimensions } from 'react-native'
import { TasksTimeline, ScreenBackground, NameAndImage, SocialMediaList, FTCStyledText } from "../components";
import { getUserDetails, loadingStyle, showNetworkErrorMessage, primaryColor } from '../global'
var width = Dimensions.get('window').width; //full width

export class UserProfile extends Component {

    state = {
        user:{
            "id":'',
            "first_name": "",
            "last_name": "",
            "student_id": '',
            "phone": "",
            "bio": "",
            "profilephoto_full_link": "",
            'profilephoto_b64':'',
            total_points:'',
            weekly_points:'',
            socialmedia:[]
        },
        tasks:{},
        isLoading:true
    }

    componentDidMount(){
        const user_id = this.props.navigation.state.params.id
        this.setState({isLoading:true})
        getUserDetails(user_id).then(response => {
            if(response.status == 200){
                this.setState(response.data)
                console.log(this.state)
            }
                
            else
                showNetworkErrorMessage(this.props.navigation);
            this.setState({isLoading:false});
        }).catch(error => {console.log(error); showNetworkErrorMessage(this.props.navigation) })
    }

    renderHeader = () => {
        return (
            <SafeAreaView style={styles.headerContainer}>
                <View style={styles.userInfoContainer}>
                    <NameAndImage src={ this.state.user.profilephoto_full_link } name={this.state.user.first_name +' '+ this.state.user.last_name} description={this.state.user.bio} style={styles.NameAndImage} imageStyle={styles.image} textStyle={styles.textStyle} showPulse={true}/>
                </View>
                <SocialMediaList accounts ={this.state.user.socialmedia} />
                <View style={styles.lineBreak} />
                <FTCStyledText style={styles.title} >تاريخ أعمال {this.state.user.first_name}</FTCStyledText>
            </SafeAreaView>
        )
    }
  render() {
    return (
    <View style={styles.screenContainer} >
        <ScreenBackground />
        <ActivityIndicator
            style={loadingStyle}
            animating={this.state.isLoading}
            size="large"
            color={primaryColor} />
        {!this.state.isLoading ? <TasksTimeline tasks = {this.state.tasks}  header = {this.renderHeader} /> : null}
    </View>
    )
  }
}


const styles = StyleSheet.create({
    screenContainer:{
        flex:1,
    },
    headerContainer:{
        width: width - 16, // 16 is margin, width is full width
        alignSelf:'center',
        justifyContent:'center'
    },
    NameAndImage: {
        flex: 1,
        paddingBottom: 0,
    },
    image: {
        width: 175,
        height: 175,
        borderRadius: 90
    },
    textStyle: {
        color: 'white'
    },
    icon: {
        borderColor: 'black',
        borderWidth: 2
    },
    actionButton: {
        // padding:60,
        // flex: 1, 
        alignItems: 'center',
        // marginRight: 20,
        // marginTop: 50,
    },
    flatListContentContainer:{ 
      flexGrow: 0,
      paddingBottom:25,
      marginTop: 100,
    },
    lineBreak: {
        alignSelf: 'center',
        width: '80%',
        height: 5,
        backgroundColor: '#eeeeee',
        borderRadius:5,
        marginBottom:16
    },
    title:{
        fontFamily:'Cairo-Bold',
        fontSize:20,
        color:'white',
        textAlign:'center'
      }
  });