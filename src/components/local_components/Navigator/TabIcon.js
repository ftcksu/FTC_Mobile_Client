import React from 'react'
import { View, Image } from 'react-native'
import { LinearGradient } from 'expo';

export const TabIcon = (props) => {
    const { size, src } = props
    const styles = {
        width: size,
        height: size,
    }
    
    return (
        props.isFocused ?
            <LinearGradient
                colors={['#6535bc', '#3986e0']}
                style={{ padding: 10, marginTop: 10, alignItems: 'center', borderRadius: 100, justifyContent: 'center' }}
            >
                <Image style={[styles, { tintColor: '#fff' }]} source={src} />
            </LinearGradient>
        :
            <View style={{ marginTop: 10 }}>
                <Image style={styles} source={src} />
            </View>
    )
}