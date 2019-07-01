
import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native'
import { FTCStyledText, ScreenBackground } from '../'
import { TextStyles } from "../../global/styles/TextStyles"
import Images from "../../../assets/images";


const {
    header2, subtitle
  } = TextStyles;


export class ScreenWithHeader extends React.Component {
  
    
    handelBackButtonPress = () =>{
        this.props.backFuction();
      }

    renderHeader(){
        return(
          <View style={styles.headerContainer} >
            <TouchableOpacity style={styles.cancelIcon} onPress={this.handelBackButtonPress}>
              <Image source={Images.cancel} style={styles.cancelIcon} />
            </TouchableOpacity>
            <FTCStyledText style={header2} >{this.props.title}</FTCStyledText>
            <FTCStyledText style={[subtitle,{margin:15}]} >{this.props.subtitle}</FTCStyledText>
            {this.props.showCalender? <Image source={Images.calenderIcon} style={styles.eventIcon} /> : <View style={styles.eventIcon}/> /* To keed the header at the same size with or without the icon. for consistency reasons */}
            
          </View>
        )
      }

    render() {
      return( 
            <View style={styles.container} >
                <ScreenBackground/>
                {this.renderHeader()}
                {this.props.children}
            </View>

      );
    }
  }

  const styles ={
    container:{
      minHeight:'100%'
    },
    headerContainer:{
      margin:20,
      marginTop:30,
      alignItems:'center',
      flex:1,
      flexGrow:1,
      justifyContent:'space-evenly',
    },
    eventIcon:{
      alignSelf:'flex-start',
      height:35,
      width:35
    },
    cancelIcon: {
      alignSelf:'flex-end',
      height:35,
      width:35
    },
    content: {
      backgroundColor:'white',
      flex:4,
      padding:10
    },
    grid:{
      // alignItems:'center',
      backgroundColor:'#eee'
    },
    buttonIcon:{
      position:'absolute',
      right:10
    },
    whatsappButton:{
      backgroundColor:'#2ecc71',
      height:75,
      marginTop:15,
  
    },
    whatsappButtonTitle:{
      fontFamily:'Cairo-Bold'
    }
    
  }