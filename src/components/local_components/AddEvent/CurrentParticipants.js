import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { FlatGrid, SectionGrid } from 'react-native-super-grid/index'
import { GridItem } from './GridItem'

const items = [
  { id: 1, name: 'باسل العبدلي' },
  { id: 2, name: 'عبدالمحسن العنزي' },
  { id: 3, name: 'نواف الكعيد' },
  { id: 4, name: 'عبدالاله النمي' }
]

/*
If max participant is set to a number, say 3, then adding
3 participants won't affect anything. When a fourth member
is added, max participant is then incrementd to 4.
*/

export class CurrentParticipants extends Component {
  state = {
    items: items
  }
  _removeItem = (id) => {
    let filteredArray = this.state.items.filter(item => item.id !== id)
    this.setState({ items: filteredArray });
  }

  render() {
    return (
      <View>
        <FlatGrid
          itemDimension={130}
          items={this.state.items}
          renderItem={({ item }) => (
            <GridItem
              item={item}
              removeItem={(id) => this._removeItem(id)}
            />)}
          style={styles.container}

        />
      </View>
    )
  }
}

const styles = {
  container: {
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#eeeeee',
  },
}