import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Platform } from 'react-native'
import Autocomplete from 'react-native-autocomplete-input'
import data from '../../../dummy_data/PartiData.json'
import data2 from '../../../dummy_data/PartiData_2.json'

/*
    IGNORE CONNECTING REDUX FOR NOW.
*/

export class Participants extends Component {

  state = {
    query: '',
  }

  render() {
    const { query } = this.state;
    return (
      <View style={styles.container}>
        {/* <Autocomplete
        autoCorrect={false}
        data={data2}
        containerStyle={styles.autocompleteContainer}
        placeholder={'Enter name: '}
        defaultValue={query}
        onChangeText={text => {
          this.setState({query: text})
          console.log(this.state.query)
        }}
        renderItem={item => (
          <TouchableOpacity onPress={() => {
            console.log(item.id)
            }}>
            <Text style={styles.itemText}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      /> */}
        <Autocomplete
          autoCorrect={false}
          placeholder={'اكتب هنا المشاركين مبدئياً'}
          data={data.name}
          defaultValue={query}
          containerStyle={styles.autocompleteContainer}
          onChangeText={text => this.setState({ query: text })}
          renderItem={data => (
            <TouchableOpacity onPress={console.log(data.name)}>
              <Text style={{ textAlign: 'right', marginTop: 10, paddingTop: 5, paddingBottom: 5, paddingRight: 10 }}>{data.name}</Text>
            </TouchableOpacity>
          )}
          inputContainerStyle={{ borderRadius: 10, alignItems: 'flex-end', paddingRight: 10 }}
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
