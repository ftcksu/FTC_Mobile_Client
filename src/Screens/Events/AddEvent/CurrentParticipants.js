import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { FlatGrid, SectionGrid } from 'react-native-super-grid'
import { GridItem } from './GridItem'

export class CurrentParticipants extends Component {
  render() {
    return (
      <View>
        <FlatGrid
          itemDimension={130}
          items={['عبدالمحسن العنزي','عبدالمحسن العنزي','عبدالمحسن العنزي',
          'عبدالمحسن العنزي','عبدالمحسن العنزي','عبدالمحسن العنزي']}
          renderItem={({ item }) => (<GridItem name={item} />)}
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