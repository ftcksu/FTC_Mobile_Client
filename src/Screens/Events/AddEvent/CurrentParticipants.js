import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'
import { GridItem } from './GridItem'

/*
If max participant is set to a number, say 3, then adding
3 participants won't affect anything. When a fourth member
is added, max participant is then incrementd to 4.
*/

export class CurrentParticipants extends Component {

  state = {
    row: 1
  }

  _removeItem = (id) => {
    let filteredArray = this.props.items.filter(item => item.id !== id)
    this.props.updateState(filteredArray);
  }

  _renderItem = ({ item, rowIndex }) => {
    console.log(`rowIndex: ${rowIndex}`)
    return (
      <GridItem
        item={item}
        removeItem={(id) => this._removeItem(id)}
      />
    )
  }

  render() {
    return (
      <FlatGrid
        fixed={true}
        items={this.props.items}
        renderItem={(item, rowIndex) => this._renderItem(item, rowIndex)}
        style={styles.container}
      />
    )
  }
}

const styles = {
  container: {
    // flexDirection: 'row-reverse', // (?) applied to only first row
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#eeeeee',
  },
}