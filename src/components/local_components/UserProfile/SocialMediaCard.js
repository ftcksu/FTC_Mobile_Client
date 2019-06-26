import React, { Component } from 'react'
import { Image, View } from 'react-native'
export class SocialMediaCard extends Component {
    render() {
        return (
            <View>
                <Image style={[...this.props.iconStyle]} source = {this.props.icon} />
            </View>
        )
    }
}
