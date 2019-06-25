

import React, { Component } from 'react'
import { Image, View, ScrollView, TouchableOpacity, Text, TouchableHighlight } from 'react-native'
import ScreenWithHeader from "../components/shared_components/ScreenWithHeader";
import FTCStyledText from "../components/shared_components/FTCStyledText";
import { TextStyles } from "../global/styles/TextStyles"
import { Input } from 'react-native-elements/src/index'
import { inputFieldStyle } from "../global/styles/inputFieldStyle"
import GradientButton from "../components/shared_components/GradientButton";
import Swipeable from 'react-native-swipeable';
import {SwipeableText} from './../components/local_components/AcceptMemberWork/SwipeableText'

const {
    header3
  } = TextStyles;

const {
    inputContainerStyle, containerStyle, inputStyle
    } = inputFieldStyle;

export class AcceptMemberWork extends Component {

    constructor(props) {
        super(props);

        this.state = {
           users: [
               {
                   id: 1,
                   image:"https://www.ftcksu.com/v1/users/getUserImage/1",
                   name: 'كحلوت الخاتمة',
                   work: [
                       {
                           workId: 11,
                           description: 'I 1 did this and that 1',
                           backgroundColor: '#fff',
                           status: 'none'
                       }, {
                        workId: 12,
                        description: 'I 1 did this and that 2',
                        backgroundColor: '#fff',
                        status: 'none'
                    }
                   ]
               }, {
                id: 2,
                image:"https://www.ftcksu.com/v1/users/getUserImage/2",
                name: 'اوطدتي',
                work: [
                    {
                        workId: 21,
                        description: 'I 2 did this and that 1',
                        backgroundColor: '#fff',
                        status: 'none'
                    }, {
                     workId: 22,
                     description: 'I 2 did this and that 2',
                     backgroundColor: '#fff',
                     status: 'none'
                 }
                ]
            }
           ]
        }
     }


    _handelBackButtonPress = () =>{
        this.props.navigation.pop();
    } 

    renderUsersInformation() {
        let usersInfo = this.state.users.map( (data) => {
            return (
                <View style={styles.userView}>
                    <FTCStyledText style={styles.userName}>{data.name}</FTCStyledText>
                    <Image
                        source={{uri:data.image}}
                        style={styles.userImage}
                    />
                </View>
            )
        });
        return (

            <View>
                {usersInfo}
            </View>
        );
    }

    render() {

    
        return(
            <ScrollView bounces={false}>
                <ScreenWithHeader title={"فعالية كيف نشرب شاهي"} subtitle={"هذه الفعالية تحدف إلى تثقيف عبدالاله ونواف عن ما هو الشاهي الكويس والشاهي الخايس"} showCalender={false} backFuction={this._handelBackButtonPress}>
                    <View style={styles.content}>
                        {this.renderUsersInformation()}
                        {/* <SwipeableText text={'hi'} canceFunction={null} acceptFuction={null} editFunction={null} backgroundColor={'white'} />
                        <Text>dsad</Text> */}
                    </View>
                    
                </ScreenWithHeader>
            </ScrollView>

        );
    }

}
const styles ={
    content: {
      backgroundColor:'white',
      padding:10,
      height: '100%',
      alignItems: 'flex-end',
    }, userView: {
        marginTop: 40,
        flexDirection: 'row',
    }, userName: {
        alignSelf: 'center',
        marginRight: 15,
        fontSize: 20,
    }, userImage: {
        height: 80,
        width: 80,
        borderRadius: 40, // Half of height and width
    }
  }