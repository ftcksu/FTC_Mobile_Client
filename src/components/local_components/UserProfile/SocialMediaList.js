import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import { SocialMediaCard } from './SocialMediaCard'
import ImageAssets from '../../../../assets/images'
import _ from 'lodash'

export class SocialMediaList extends Component {

    
    getUserSocialMediaAccounts(){ 
         let accounts = this.props.accounts;
        socialMediaPlatforms.forEach(socialNetwork => {
            accounts.map( (account) => {
                if(account.platform == socialNetwork.platform){
                    account.icon = socialNetwork.icon
                    account.style = socialNetwork.style
                }
                return accounts;
            } )
        });
        return accounts;
    }


    render() {
        return (
            <View style={[this.props.style, styles.container]}>
                <FlatList
                    horizontal={true}
                    contentContainerStyle={styles.flatListContainer}
                    data={this.getUserSocialMediaAccounts()}
                    renderItem={({ item }) => (
                        <SocialMediaCard platform = {item.platform} username= {item.username} iconStyle={[styles.icon, item.style]} icon ={item.icon}/>
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
        platform:'snapchat',
        icon:ImageAssets.snapchat,

    },
    {
        platform:'linkedin',
        icon:ImageAssets.linkedin,
        style:styles.iconBackground
    },
    {
        platform:'twitter',
        icon:ImageAssets.twitter,
        style:styles.iconBackground

    },
    {
        platform:'steam',
        icon:ImageAssets.steam,
        style:styles.iconBackground

    },
    {
        platform:'whatsapp',
        icon:ImageAssets.whatsapp,
    },
];