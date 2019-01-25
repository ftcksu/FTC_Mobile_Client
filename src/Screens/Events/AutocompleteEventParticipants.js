import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import Autocomplete from 'react-native-autocomplete-input';
const names=[
    {
        first_name:"نواف",
        last_name:"القعيد"
    },
    {
        first_name:"اسامة",
        last_name:"العقيلي"
    },
    {
        first_name:"عبدالإله",
        last_name:"النمي"
    },
];


export default class AutocompleteEventParticipants extends Component {
    state = {
        members: names,
        query: ''
      };

    render() {
        const { query } = this.state;
        const names = this.renderNames(query);
        return (
            <Autocomplete style={styles.container}
            autoCorrect={false}
            placeholder={'اكتب هنا المشاركين مبدئياً'}
            data={names}
            defaultValue={query}
            onChangeText={text => this.setState({ query: text })}
            renderItem={data => (
            <TouchableOpacity style={styles.autocompleteRow} onPress={this.onNamePress.bind(this, data)} >
              <View style={styles.rowImageAndTextContainer} >
                <Text style={styles.textRow}>{data}</Text>
                <Image style={styles.imageRow} source={require('../../../assets/images/profileIcon.png')} />
              </View>
              <View style={styles.lineBreak} />
              </TouchableOpacity>
              
            )}
            inputContainerStyle={{ borderRadius: 10, alignItems: Platform.OS === 'ios' ? 'flex-end' : 'stretch', paddingRight: 10 }}

          />
         )
        }

      renderNames(query) {
        if (query === '') {
          return [];
        }
    
        const { members } = this.state;
        const tmp = members.filter((member) => (member.first_name + ' ' + member.last_name).includes(query));
        return tmp.map((member, i) =>
          <Text key={member.id} style={{ textAlign: 'right' }}>{member.first_name + ' ' + member.last_name}</Text>);
      }
      onNamePress(){
        this.setState({ query: '' });
      }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        padding:15,
        fontSize: 19,
        fontFamily:'Cairo-Light',
        backgroundColor:"#eeeeee"
      },
      autocompleteRow: {
        flexDirection:"column", alignItems:"flex-end", justifyContent:"flex-end", marginTop: 10, paddingTop: 5, paddingBottom: 5, paddingRight: 10
      },
      rowImageAndTextContainer:{
        flexDirection:"row"
      },
      textRow: {
        fontSize: 18,
        fontFamily:'Cairo-Light',
        margin:10,
        color:"#9e9e9e"
      },
      imageRow: {
        width: 23,
        height: 23,
        borderRadius: 23/2,
        margin:10
    },
    lineBreak:{
      alignSelf:"center",
      width:"80%" ,
      height:2,
      backgroundColor:"#eeeeee"
    }
});
