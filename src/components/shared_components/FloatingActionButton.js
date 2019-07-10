import React, { Component } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { primaryColor, secondaryColor } from '../../global'
import { LinearGradient } from 'expo-linear-gradient'

export class FloatingActionButton extends Component {
    render() {
        const colors = this.props.colors ? this.props.colors : [primaryColor, secondaryColor]
        return (
            <LinearGradient colors={colors} style={styles.buttonContainer} >
            <TouchableOpacity onPress={this.props.onPress}  >
                <Image
                resizeMode={'center'}
                source={this.props.icon}
                style={styles.floatingActionButtonContent}
                />
            </TouchableOpacity>
        </LinearGradient>
        )
    }
}

const styles = {
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
      marginBottom:20,
      zIndex:2
  },
  floatingActionButtonContent:{
      alignSelf: 'center',
      tintColor:'white'
  },
}
