import React, { Component } from 'react'
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import { Button } from 'react-native-elements/src/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import { goToWhatsapp } from "../../global/actions/appActions";


export class ParticipantsDetails extends Component {
  
  renderWhatsappButton(){
    return (
      <Button
        onPress={() => goToWhatsapp(this.props.data.phone)} //TODO: fix the hard coded number  
        icon={
          <Icon
            style={styles.buttonIcon}
            name="whatsapp"
            size={40}
            color="white"
          />
        }
        iconRight={true}
        buttonStyle={styles.whatsappButton}
        title="كلمه واتساب"
        titleStyle={styles.whatsappButtonTitle}
        />
    )
  }
  render() {
    return (
        <View style={styles.container}>
          <Image style={styles.image} source={{uri:this.props.data.profilephoto_full_link}} />
          <Text style={styles.name} > {this.props.data.first_name +" "+this.props.data.last_name } </Text>
          {this.renderWhatsappButton()}
        </View>
    )
  }
}

const styles={
  container:{
    justifyContent:'space-evenly',
    height:'70%',
    width:'80%', 
    backgroundColor:'white', 
    alignSelf:'center', 
    alignItems:'center'
  },
  image:{
    width: 150,
    height: 150,
    borderRadius: 150/2,
  },
  name:{
    fontFamily:'Cairo-Bold',
    fontSize:20
  },
  whatsappButton:{
    backgroundColor:'#2ecc71',
    height:75,
    width:'100%',
    marginTop:15,
    alignContent:'center',
    borderRadius:20
    

  },
  whatsappButtonTitle:{
    fontFamily:'Cairo-Bold',
    textAlign:'center'
  },
  buttonIcon:{
    margin:10
  }
}