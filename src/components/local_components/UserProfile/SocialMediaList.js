import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import { SocialMediaCard } from './SocialMediaCard'
import ImageAssets from '../../../../assets/images'

export class SocialMediaList extends Component {
    render() {
        return (
            <View style={[this.props.style, styles.container]}>
                <FlatList
                    horizontal={true}
                    contentContainerStyle={styles.flatListContainer}
                    data={socialMediaPlatforms}
                    renderItem={({ item }) => (
                        <SocialMediaCard iconStyle={[styles.icon, item.style]} icon ={item.icon}/>
                    )}
                />
            </View>
        )
    }
}

const styles = {
    container:{
        flex:1,
        alignSelf: 'center',
        flexDirection:'column',
        margin:16,
    },
    flatListContainer:{
        // flex:1,
        // justifyContent: 'flex-start',
        // backgroundColor:'white',
        // borderRadius:10,
    },
    icon:{
        width:30,
        height:30,
        margin:8,
    },
    iconBackground:{
        backgroundColor:'white',
        borderRadius:10
    },
    
}

const socialMediaPlatforms=[
    {
        name:'Snapchat',
        icon:ImageAssets.snapchat
    },
    {
        name:'LinkedIn',
        icon:ImageAssets.linkedin,
        style:styles.iconBackground
    },
    {
        name:'Twitter',
        icon:ImageAssets.twitter,
        style:styles.iconBackground

    },
    {
        name:'Steam',
        icon:ImageAssets.steam,
        style:styles.iconBackground

    },
    {
        name:'Whatsapp',
        icon:ImageAssets.whatsapp,
    },
];