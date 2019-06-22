
import React, { Component } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import Swipeable from 'react-native-swipeable';
import images from './../../../../assets/images'
import FTCStyledText from './../../shared_components/FTCStyledText'

const imageHeight = 40
const imageWidth = 40

export class SwipeableText extends Component {

    render() {
        const leftButton = [<TouchableOpacity style={styles.declineCard} onPress={this.props.cancelFunction}><Image source={images.cancel} style={styles.declineImage}/></TouchableOpacity>];

        const rightButtons = [
        <TouchableOpacity style={styles.editCard} onPress={this.props.editFunction}><Image source={images.edit} style={styles.editImage}/></TouchableOpacity>,
        <TouchableOpacity style={styles.acceptCard} onPress={this.props.acceptFuction}><Image source={images.checkIcon} style={styles.acceptImage}/></TouchableOpacity>
        ];

        return(
            <View style={styles.card}>
                <Swipeable onRef={ref => this.swipeable = ref} rightButtons={rightButtons} leftButtons={leftButton} style={styles.swipeContent}>
                    <View style={[styles.textContainer, {backgroundColor: this.props.backgroundColor}]}>
                        <FTCStyledText>{this.props.text}</FTCStyledText>
                    </View>
                </Swipeable>
            </View>
        )
    }
}


const styles ={
    card: {
      backgroundColor:'white',
      padding:10,
      height: '100%',
    },editCard: {
        backgroundColor: '#9E9E9E',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 1

    }, editImage: {
        tintColor: 'white',
        height: imageHeight,
        width: imageWidth,
        marginLeft: 20

    }, acceptCard: {
        backgroundColor: '#009688',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 1
    }, acceptImage: {
        tintColor: 'white',
        height: imageHeight,
        width: imageWidth,
        marginLeft: 20
    }, declineCard: {
        backgroundColor: '#FF5722',
        justifyContent: 'center',
        alignItems: 'flex-end',
        flex: 1
    }, declineImage: {
        tintColor: 'white',
        height: imageHeight,
        width: imageWidth,
        marginRight: 20
    }, swipeContent: {
        backgroundColor: 'white',
        flex: 1

    }, textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
}