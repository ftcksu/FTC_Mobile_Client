import React from 'react'
import { View, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { primaryColor, secondaryColor } from "../../../global/Constants";

export const TabIcon = (props) => {
    const { size, src } = props
    const styles = {
        width: size,
        height: size,
    }
    
    return (
        props.isFocused ?
            <LinearGradient
                colors={[primaryColor, secondaryColor]}
                style={{ padding: 10, marginTop: 10, alignItems: 'center', borderRadius: 25, justifyContent: 'center' }}
            >
                <Image style={[styles, { tintColor: '#fff' }]} source={src} />
            </LinearGradient>
        :
            <View style={{ marginTop: 10 }}>
                <Image style={styles} source={src} />
            </View>
    )
}