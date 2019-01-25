import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Autocomplete from 'react-native-autocomplete-input'
import data from '../../../dummy_data/PartiData.json'
import data2 from '../../../dummy_data/PartiData_2.json'


export class Participants extends Component {
  state = {
    query: ''
  }

  render() {
    return (
      <View style={styles.container}>
      <Autocomplete
        autoCorrect={false}
        data={data2}
        containerStyle={styles.autocompleteContainer}
        placeholder={'enter name: '}
        defaultValue={this.state.query}
        onChangeText={text => this.setState({ query: text })}
        renderItem={item => (
          <TouchableOpacity onPress={() => console.log(item.id)}>
            <Text style={styles.itemText}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
      </View>
    )
  }
}

const styles = {
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 25
  },
  autocompleteContainer: {
    marginLeft: 10,
    marginRight: 10
  },
  itemText: {
    fontSize: 15,
    margin: 2
  },
}
