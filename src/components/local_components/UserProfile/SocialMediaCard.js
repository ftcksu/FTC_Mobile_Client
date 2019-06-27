import React, { Component } from 'react'
import { Image, View } from 'react-native'
import { goToSocialMedia } from '../../../global'
import { TouchableOpacity } from 'react-native-gesture-handler';
export class SocialMediaCard extends Component {
    render() {
        return (
            <TouchableOpacity onPress={()=>goToSocialMedia(this.props.platform, this.props.username)}>
                <Image style={[...this.props.iconStyle]} source = {this.props.icon} />
            </TouchableOpacity>
        )
    }
}
