import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Autocomplete from 'react-native-autocomplete-input';

export class AutocompleteEventParticipants extends Component {

  state = {
    query: ''
  }

  render() {
    const { query } = this.state;
    const filteredMembers = this.renderNames(query);
    return (
      <Autocomplete style={styles.container}
        containerStyle={{ marginTop: 15 }}
        autoCorrect={false}
        placeholder={'اكتب هنا المشاركين مبدئياً'}
        data={filteredMembers}
        defaultValue={query}
        inputContainerStyle={{ borderWidth: 0 }}
        onChangeText={text => this.setState({ query: text })}
        renderItem={(item) => (
          this.renderRow(item)
        )}
      />
    )
  }

  renderRow(item) {
    return (
      <TouchableOpacity style={styles.autocompleteRow} onPress={() => this.onNamePress(item)} >
        <View style={styles.rowImageAndTextContainer} >
          <Text style={styles.textRow}>{item.first_name} {item.last_name}</Text>
          <Image style={styles.imageRow} source={{ uri: item.image }} />
        </View>
        <View style={styles.lineBreak} />
      </TouchableOpacity>
    )

  }

  renderNames(query) {
    if (query === '') {
      return [];
    }

    const { members } = this.props
    const tmp = members.filter((member) => (`${member.first_name} ${member.last_name}`).includes(query))
    if (tmp.length > 4) { // just to make sure that only a max of 4 items will be rendered.
      return tmp.slice(0, 4)
    }
    return tmp
  }

  onNamePress = (item) => {
    this.setState({ query: '' })
    // updatestate(item) => add item to CurrentParticipants[], remove item from members[]
    this.props.updateState(item)
  }
}

const styles = StyleSheet.create({
  container: {
    // padding:15,
    textAlign: 'right',
    paddingRight: 15,
    height: 40,
    fontSize: 14,
    fontFamily: 'Cairo-Bold',
    backgroundColor: "#eeeeee",
    width: "100%",
  },
  autocompleteRow: {
    flexDirection: "column", alignItems: "flex-end", justifyContent: "flex-end",
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
  }
});
