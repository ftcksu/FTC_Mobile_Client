import React, { Component } from 'react'
import { Image, View, ScrollView, TouchableOpacity } from 'react-native'
import ScreenWithHeader from "../components/shared_components/ScreenWithHeader";
import FTCStyledText from "../components/shared_components/FTCStyledText";
import { TextStyles } from "../global/styles/TextStyles"
import { Input } from 'react-native-elements/src/index'
import { inputFieldStyle } from "../global/styles/inputFieldStyle"
import GradientButton from "../components/shared_components/GradientButton";
import Images from "../../assets/images";
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view'


const {
      header
    } = TextStyles;

const {
    inputContainerStyle, containerStyle, inputStyle
    } = inputFieldStyle;

export class RegisterWork extends Component {

    constructor(props) {
        super(props);
     
        this._handleAddButton = this._handleAddButton.bind(this);
        this._handleSubmitButton = this._handleSubmitButton.bind(this);
     
        this.state = {
           data: ['']
        }
     }

     _handelBackButtonPress = () =>{
        this.props.navigation.pop();
      }    


     _handleAddButton() {
        let newlyAddedData = '';
    
        this.setState({
            data: [...this.state.data, newlyAddedData]
        });
        
        
    }

    _handleTextChange = (text, index) => {
        temp = this.state.data
        temp[index] = text
        this.setState({
            data: temp
        })
        
    }

    _handleSubmitButton() {
        console.log(this.state.data);
        this._handelBackButtonPress()
    }

    renderHeader() {
        return(
            <FTCStyledText style={[header, styles.title]}>ماذا فعلت يا غلام</FTCStyledText>
        );
    }

    renderFooter() {
        return(
            <View>
                <TouchableOpacity style={styles.addMoreButtonContainer} onPress={this._handleAddButton}>
                    <Image source={Images.roundAdd} style={styles.addIcon} />
                </TouchableOpacity>
                <View style={styles.confirmWorkButtonContainer}>
                    <GradientButton icon={Images.recordPoints} title="رصد الأعمال" onPress={this._handleSubmitButton}/>
                </View>
            </View>
        );
    }
 

    renderWorkTextInput() {
    
        return (
            <View>

                <KeyboardAwareFlatList
                    data={this.state.data}
                    contentContainerStyle={{ flexGrow: 0 }}
                    ListHeaderComponent={this.renderHeader()}
                    renderItem={({ item, index }) => (
                            <Input
                                placeholder={'تقشير بصل'}
                                inputContainerStyle={inputContainerStyle}
                                containerStyle={[containerStyle]}
                                inputStyle={inputStyle}
                                onChangeText={(text) => this._handleTextChange(text, index)}
                                key={index}
                            />    

                    )}
                    ListFooterComponent={
                        this.renderFooter()
                    }
                />

            </View>
            
        );
    }


    render() {

        return(
            <ScrollView bounces={false}>
                <ScreenWithHeader title={"فعالية كيف نشرب شاهي"} subtitle={"هذه الفعالية تحدف إلى تثقيف عبدالاله ونواف عن ما هو الشاهي الكويس والشاهي الخايس"} showCalender={false} backFuction={this._handelBackButtonPress}>
                    <View style={styles.content} >
                        {this.renderWorkTextInput()}
                        
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
    },
    title: {
        marginTop: 20,
        marginBottom: 40,

    }, addMoreButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        padding: 20,
        height: 30,
        width: 60,

    }, addIcon:{
        resizeMode:'contain',
        tintColor: 'green',
        alignSelf: 'center',
        height: 30,
        width: 30,


      }, confirmWorkButtonContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
    }, 
  }