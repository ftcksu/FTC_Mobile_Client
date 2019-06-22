

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
                   name: 'كحلوت',
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
                name: 'صدتي',
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



    render() {

    
        return(
            <ScrollView bounces={false}>
                <ScreenWithHeader title={"فعالية كيف نشرب شاهي"} subtitle={"هذه الفعالية تحدف إلى تثقيف عبدالاله ونواف عن ما هو الشاهي الكويس والشاهي الخايس"} showCalender={false} backFuction={this._handelBackButtonPress}>
                    <SwipeableText text={'hi'} canceFunction={null} acceptFuction={null} editFunction={null} backgroundColor={'white'} />
                    <Text>dsad</Text>
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
    },inputsContainer: {
        marginTop: 50,
    }
  }