import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { InputWithTitle } from '../../'

export class AutocompleteEventParticipants extends Component {
  renderInput = () =>{
    return (
      <InputWithTitle 
        title ={"اسماء المشاركين مبدئياً"}
        placeholder={'اختياري'}
        onChangeText={(text) =>this.setState({ query: text })}
        value ={this.state.query}
      />
    )
  }

  state = {
    query: '',
  }

  render() {
    const { query } = this.state;
    const filteredMembers = this.renderNames(query);
    // console.log(filteredMembers);
    return (
      <View containerStyle={[styles.container, this.props.containerStyle]} >
        {this.renderInput()}
        <FlatList
            data={filteredMembers}
            contentContainerStyle={{ flexGrow: 0, height: 90 *  filteredMembers.length }}
            renderItem={({ item, index }) => (
              this.renderRow(item)
            )}
          />
      { this.props.scroll }
      </View>
    )
  }

  renderRow(item) {
    return (
      <TouchableOpacity style={styles.autocompleteRow} onPress={() => this.onNamePress(item)} >
        <View style={styles.rowImageAndTextContainer} >
          <Text style={styles.textRow}>{item.first_name} {item.last_name}</Text>
          <Image style={styles.imageRow} source={{ uri: item.profilephoto_b64 }} />
        </View>
        <View style={styles.lineBreak} />
      </TouchableOpacity>
    )

  }

  renderNames(query) {

    if (query === '') {
      return [];
    }
    const { users, enrolledUsers,  } = this.props
    console.log(users);
    const enrolledUsersIDs = enrolledUsers.map(user => {
      return user.id
    }) 
    const usersMatchQuery = users.filter((user) => (`${user.first_name} ${user.last_name}`).includes(query))
    const usersMatchQueryAndNotAlreadyIn = usersMatchQuery.filter((user) => ! enrolledUsersIDs.includes(user.id))
    if (usersMatchQueryAndNotAlreadyIn.length > 4) { // just to make sure that only a max of 4 items will be rendered.
      return usersMatchQueryAndNotAlreadyIn.slice(0, 4)
    }
    return usersMatchQueryAndNotAlreadyIn

  }

  onNamePress = (user) => {
    this.setState({ query: '' })
    this.props.onEnrollUser(user)
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'black'

  },
  inputContainerStyle:{
    alignContent:'flex-end'
  },
  autocompleteRow: {
    flexDirection: "column", alignItems: "flex-end", justifyContent: "flex-end", height:70
  },
  rowImageAndTextContainer: {
    flexDirection: "row",
    margin: 10,
  },
  textRow: {
    fontSize: 14,
    fontFamily: 'Cairo-Bold',
    margin: 10,
    color: "#9e9e9e"
  },
  imageRow: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  lineBreak: {
    alignSelf: "center",
    width: "100%",
    height: 2,
    backgroundColor: "#eeeeee"
  },
  inputStyle:{
      textAlign: 'right',
      fontFamily:'Cairo-Bold',
      fontSize:13,
      marginRight:8,
  },
  containerStyle:{
    alignSelf: 'center',
    flex:1,
    flexDirection: "row",
  },
});
