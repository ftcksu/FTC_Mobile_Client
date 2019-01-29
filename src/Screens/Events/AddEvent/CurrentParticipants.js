import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { FlatGrid, SectionGrid } from 'react-native-super-grid'

export class CurrentParticipants extends Component {
  render() {
    return (
      <View>
        <FlatGrid
          itemDimension={130}
          items={[1, 2, 3, 4, 5, 6]}
          renderItem={({ item }) => (<Text>{item}</Text>)}
        />
      </View>
    )
  }
}