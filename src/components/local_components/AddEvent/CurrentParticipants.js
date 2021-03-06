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



  _removeItem = (item) => {
    // remove from currecntParticipants[] and add to memebers[]
    // let filteredArray = this.props.items.filter(i => i.id !== item.id)
    this.props.onRemovedEnrolledUser(item);
  }

  _renderItem = ({ item }) => {
    return (
      <GridItem
        item={item}
        removeItem={(item) => this._removeItem(item)}
      />
    )
  }

  render() {
    return (
      this.props.enrolledUsers.length ? 
      <FlatGrid
        fixed={true}
        items={this.props.enrolledUsers}
        renderItem={(item) => this._renderItem(item)}
        style={[styles.container, this.props.containerStyle]}
      />
      :
      null
    )
  }
}

const styles = {
  container: {
    flex:1,
    flexDirection: 'row-reverse', // (?) applied to only first row
    margin: 15,
    marginBottom: 15,
    backgroundColor: '#eeeeee',
    // alignItems:'flex-end',
  },
}