import React, { Component } from 'react'
import { Image, View, ScrollView, TouchableOpacity, Text, TouchableHighlight } from 'react-native'
import ScreenWithHeader from "../components/shared_components/ScreenWithHeader";
import FTCStyledText from "../components/shared_components/FTCStyledText";
import { TextStyles } from "../global/styles/TextStyles"
import { Input } from 'react-native-elements/src/index'
import { inputFieldStyle } from "../global/styles/inputFieldStyle"
import GradientButton from "../components/shared_components/GradientButton";
import images from './../../assets/images'
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view'

  const {
    inputContainerStyle, inputStyle
  } = inputFieldStyle

export class AcceptMemberWork extends Component {

    constructor(props) {
        super(props);

        this.state = {
           users: [
               {
                   id: 1,
                   image:'https://www.ftcksu.com/v1/users/getUserImage/1',
                   name: 'كحلوت الخاتمة',
                   work: [
                       {
                           workId: 11,
                           description: 'ماذا افعل يا الهيماذا افعل يا الهيماذا افعل يا الهيماذا افعل يا الهيماذا افعل يا الهي',
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
                image:'https://www.ftcksu.com/v1/users/getUserImage/2',
                name: 'اوطدتي',
                work: [
                    {
                        workId: 21,
                        description: 'I 2 did this and that 1',
                        backgroundColor: '#fff',
                        status: 'none'
                    }, {
                     workId: 22,
                     description: 'I 2 did this and that 2 woooohoooooooddsadas',
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

    _handleTextChange = (text, workIndex, userIndex) => {
        temp = this.state.users;
        temp[userIndex].work[workIndex] = text
        this.setState({
            users:temp
        })
        
    }

    renderUsersInformation() {

        return(
            
            <KeyboardAwareFlatList
            data={this.state.users}
            contentContainerStyle={{ flexGrow: 0,alignItems:'flex-end', flex: 1 }}
            renderItem={({ item: userItem, index: userIndex }) => (
                <View>
                    <View style={styles.userView}>
                    <FTCStyledText style={styles.userName}>{userItem.name}</FTCStyledText>
                    <Image
                        source={{uri:userItem.image}}
                        style={styles.userImage}
                    />
                    
                    </View>
                    <KeyboardAwareFlatList
                    data={userItem.work}
                    contentContainerStyle={{ flexGrow: 0,alignItems:'flex-end' }}
                    renderItem={({ item: workItem, index: workIndex }) => (
                        <View style={styles.workContainer}>
                            <View style={styles.iconsContainer}>
                                <Image source={images.checkIcon} style={styles.acceptWorkIcon}/>
                                <Image source={images.cancel} style={styles.declineWorkIcon}/>
                            </View>
                            <Input
                                value={workItem.description}
                                inputContainerStyle={[inputContainerStyle, styles.workInput ]}
                                inputStyle={inputStyle}
                                multiline // For those who talk a lot
                                onChangeText={(text) => this._handleTextChange(text, workIndex, userIndex)}
                                
                            />
                            
                        </View>
                    
        
                    )}
                    />
                </View>
              

            )}
            />
        );

        // Should use the regular flat list over the keyboard aware one.

        // Need to use Flatlist inside a flat list, the user info will be the outer flatlist
        // , and the user tasks will be the inner flat list, the inner flat list will be rendered using the SwipableText
        // screen, then that item will be flagged as the output of the swipe, and the color of it will reflect that

        // The leader should be able to edit the work of another user by editing it in an (AwesomeAlert?).
        
        // The swipeable text file should be triggered using the same function when pulled to the side as the 
        // corosponding functionality. e.g. Pull to the left most should trigger accept fumction.

        // Should double check the performance and the design with Nawif Alquaid after finishing!

        /*
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
        */
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
        justifyContent: 'flex-end'
    }, userName: {
        alignSelf: 'center',
        marginRight: 15,
        fontSize: 20,
    }, userImage: {
        height: 80,
        width: 80,
        borderRadius: 40, // Half of height and width
    }, workContainer: {
        flexDirection: 'row',
        marginRight: 5,
        marginTop: 10,
        alignItems: 'center',
    }, workInput: {
        width:'70%',
        alignSelf: 'flex-end',
        marginRight: 10,
        marginBottom: 0,
    }, iconsContainer: {
        width: 100,
        flex: 1, 
        alignItems: 'center', 
        flexDirection:'row', 
        alignSelf: 'center'

    }, acceptWorkIcon: {
        width: 40,
        height: 40,
        tintColor: 'green',
        margin: 5,

    }, declineWorkIcon: {
        width: 40,
        height: 40,
        tintColor: 'red',
        margin: 5,
    },
  }