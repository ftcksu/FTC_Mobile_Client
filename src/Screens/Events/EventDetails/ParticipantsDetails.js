import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ParticipantsDetails extends Component {
  renderWhatsappButton(){
    return (
      <Button
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
  renderWhatsappButton(){
    return (
      <Button
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
    
      console.log(this.props);
    return (
      <TouchableOpacity onPress={this.props.callback} style={styles.container} >
        <Image style={styles.image} source={{uri:this.props.personDetails.image}} />
        <Text style={styles.name} > {this.props.personDetails.first_name +" "+this.props.personDetails.last_name } </Text>
        {this.renderWhatsappButton()}
      </TouchableOpacity>
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
    alignContent:'center'
    

  },
  whatsappButtonTitle:{
    fontFamily:'Cairo-Bold',
    textAlign:'center'
  },
  buttonIcon:{
    margin:10
  }
}