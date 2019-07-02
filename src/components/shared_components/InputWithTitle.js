import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { FTCStyledText } from '../'
import { Input } from 'react-native-elements'

export class InputWithTitle extends Component {

    renderDefaultComponent(){
        return ( 
            <Input
                    placeholder={this.props.placeholder}
                    inputStyle={styles.inputStyle}
                    containerStyle={styles.containerStyle}
                    inputContainerStyle={{borderBottomWidth: 0}}
                />
        )
    }

    render() {
    console.disableYellowBox = true

    
        return (
            <View style={styles.container}  >
                <FTCStyledText style={styles.title}> {this.props.title} </FTCStyledText>
                <View style={styles.inputContainerStyle} >
                    { this.props.children
                        ? this.props.children
                        : this.renderDefaultComponent()}
                </View>
            </View>
        )
    }
}

const styles = {
    container :{
        flex:1,
        flexDirection:'column',
        alignItems:'flex-end',
    },
    title: {
        fontFamily:'Cairo-Bold',
        fontSize: 15,
    },
    inputStyle:{
        textAlign: 'right',
        fontFamily:'Cairo-Bold',
        fontSize:13,
        marginRight:8,
    },
    containerStyle:{
      alignSelf: 'center',
    },
    inputContainerStyle:{
        backgroundColor: '#eeeeee',
        flex:1,
        flexDirection: 'row',
        margin:8
    }
}
