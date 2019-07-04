import React, { Component } from 'react'
import { Image, View, ScrollView, TouchableOpacity } from 'react-native'
import { TextStyles } from "../global/styles/TextStyles"
import { Input } from 'react-native-elements/src/index'
import { inputFieldStyle } from "../global/styles/inputFieldStyle"
import { GradientButton, FTCStyledText, ScreenWithHeader } from '../components'
import Images from "../../assets/images";


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
 
    renderWorkTextInput() {

        let addedInputs = this.state.data.map( (data, index) => {
            return (
                <Input
                    placeholder={'تقشير بصل'}
                    inputContainerStyle={inputContainerStyle}
                    containerStyle={[containerStyle]}
                    inputStyle={inputStyle}
                    onChangeText={(text) => this._handleTextChange(text, index)}
                    key={index}
                />
            )
        });
    
        return (
            <View style={styles.inputsContainer}>
                {addedInputs}
                <TouchableOpacity style={styles.addMoreButtonContainer} onPress={this._handleAddButton}>
                    <Image source={Images.roundAdd} style={styles.addIcon} />
                </TouchableOpacity>
            </View>
        );
    }


    render() {

        return(
            <ScrollView bounces={false}>
                <ScreenWithHeader title={"فعالية كيف نشرب شاهي"} subtitle={"هذه الفعالية تحدف إلى تثقيف عبدالاله ونواف عن ما هو الشاهي الكويس والشاهي الخايس"} onPressBack={this._handelBackButtonPress}>
                    <View style={styles.content} >
                        <FTCStyledText style={[header, styles.title]}>ماذا فعلت يا غلام</FTCStyledText>
                        {this.renderWorkTextInput()}
                        <View style={styles.confirmWorkButtonContainer}>
                            <GradientButton icon={Images.recordPoints} title="رصد الأعمال" onPress={this._handleSubmitButton}/>
                        </View>
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

    },inputsContainer: {
        marginTop: 50,
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