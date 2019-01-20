import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import UserPointCard from './UserPointCard'

/*
            props: array named data, has 5 attribute per index(bio,name,imageURL,position,points)
*/

export default class App extends React.Component {


  render() {
    return (
        <View style={styles.container}>

        <FlatList
            style={styles.flatView}
            data={this.props.data}
            contentContainerStyle={{ flexGrow: 0 }}
            renderItem={({ item }) => (

            <UserPointCard
                bio={item.bio}
                name={item.name}
                imageURL={item.imageURL}
                position={item.position}
                points={item.points}/>

            )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection:'column',
  },
  flatView:{
    flexGrow:0
  }
});