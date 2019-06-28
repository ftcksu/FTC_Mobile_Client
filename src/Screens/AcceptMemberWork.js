import React, { Component } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import ScreenWithHeader from "../components/shared_components/ScreenWithHeader";
import FTCStyledText from "../components/shared_components/FTCStyledText";
import { Input } from 'react-native-elements/src/index'
import { inputFieldStyle } from "../global/styles/inputFieldStyle"
import images from './../../assets/images'
import {KeyboardAwareScrollView, KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view'
import GradientButton from "../components/shared_components/GradientButton";


  const {
    inputContainerStyle, inputStyle
  } = inputFieldStyle

  const MAX_INPUT_LENGTH = 200

export class AcceptMemberWork extends Component {

    constructor(props) {
        super(props);
        this._handleTextChange = this._handleTextChange.bind(this);

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
                           status: 'None'
                       }, {
                            workId: 12,
                            description: 'I 1 did this and that 2',
                            status: 'None'
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
                        status: 'None'
                    }, {
                        workId: 22,
                        description: 'I 2 did this and that 2 woooohoooooooddsadas',
                        status: 'None'
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
        temp = [...this.state.users];
        temp[userIndex].work[workIndex].description = text;
        this.setState({
            users:temp
        });
    }

    _handleWorkFeedback = (workIndex, userIndex, feedback) => {
        temp = [...this.state.users];

        currentStatus = temp[userIndex].work[workIndex].status
        newStatus = 'None';
        newColor = inputStyle.color;
        
        if (currentStatus == feedback) {
            newStatus = 'None';
            newColor = inputStyle.color;
        }
        else {
            newStatus = feedback;
            newColor = feedback == 'Accepted'? 'green': 'red';
        }

        temp[userIndex].work[workIndex].status = newStatus;
        temp[userIndex].work[workIndex].statusColor = newColor;

        this.setState({
            users:temp
        });

    
    }

    _handleSubmitButton() {
        console.log(this.state.users);
        this._handelBackButtonPress()
    }


    renderUsersInformation() {

        return(
            
            <KeyboardAwareFlatList
                data={this.state.users}
                contentContainerStyle={{ flexGrow: 0 }}
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
                            contentContainerStyle={{ flexGrow: 0, alignItems:'flex-end' }}
                            renderItem={({ item: workItem, index: workIndex }) => (
                                <View style={styles.workContainer}>
                                    <View style={styles.iconsContainer}>
                                        <TouchableOpacity style={styles.iconStyle} onPress={() => this._handleWorkFeedback(workIndex, userIndex, 'Accepted')}>
                                            <Image source={images.checkIcon} style={[styles.iconStyle, {tintColor: workItem.status=='Declined'? inputStyle.color : 'green'}]}/>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.iconStyle} onPress={() => this._handleWorkFeedback(workIndex, userIndex, 'Declined')}>
                                            <Image source={images.cancel} style={[styles.iconStyle, {tintColor: workItem.status=='Accepted'? inputStyle.color : 'red'}]}/>
                                        </TouchableOpacity>
                                    </View>
                                    <Input
                                        value={workItem.description}
                                        inputContainerStyle={[inputContainerStyle, styles.workInput ]}
                                        inputStyle={inputStyle}
                                        multiline // For those who talk a lot
                                        onChangeText={(text) => this._handleTextChange(text, workIndex, userIndex)}
                                        maxLength={MAX_INPUT_LENGTH}
                                        scrollEnabled={false}
                                    />
                                    
                                </View>
                            
                
                            )}
                        />
                    </View>
              

            )}

            ListFooterComponent={
                <View style={styles.confirmWorkButtonContainer}>
                    <GradientButton icon={images.recordPoints} title="رصد الأعمال" onPress={this._handleSubmitButton}/>
                </View>
            }
            
            />
        );

    }

    render() {

    
        return(
            <KeyboardAwareScrollView bounces={false}>
                <ScreenWithHeader title={"فعالية كيف نشرب شاهي"} subtitle={"هذه الفعالية تحدف إلى تثقيف عبدالاله ونواف عن ما هو الشاهي الكويس والشاهي الخايس"} showCalender={false} backFuction={this._handelBackButtonPress}>
                    <View style={styles.content}>
                        {this.renderUsersInformation()}
                    </View>
                    
                </ScreenWithHeader>
            </KeyboardAwareScrollView>

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
        alignSelf: 'center',
        zIndex: 1

    }, iconStyle: {
        width: 40,
        height: 40,
        margin: 5,
        
    }, confirmWorkButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 50,
    }, 
  }