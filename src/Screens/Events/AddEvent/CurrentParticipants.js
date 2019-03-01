import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { FlatGrid, SectionGrid } from 'react-native-super-grid'
import { GridItem } from './GridItem'

/*
If max participant is set to a number, say 3, then adding
3 participants won't affect anything. When a fourth member
is added, max participant is then incrementd to 4.
*/

export class CurrentParticipants extends Component {

  _removeItem = (id) => {
    let filteredArray = this.props.items.filter(item => item.id !== id)
    this.props.updateState(filteredArray);
  }

  render() {
    return (
      <View>
        <FlatGrid
          itemDimension={130}
          items={this.props.items}
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