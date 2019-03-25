import React, { Component } from 'react'
import { View, Text } from 'react-native'
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

  _removeItem = (item) => {
    // remove from currecntParticipants[] and add to memebers[]
    // let filteredArray = this.props.items.filter(i => i.id !== item.id)
    this.props.updateState(item);
  }

  _renderItem = ({ item, rowIndex }) => {
    return (
      <GridItem
        item={item}
        removeItem={(item) => this._removeItem(item)}
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