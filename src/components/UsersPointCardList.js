import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import { Font } from 'expo'
import UserPointCard from './src/components/UserPointCard'


const content = [
    {
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':9999,
      'position':1
    },
    {
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':990,
      'position':2
    },
    {
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':980,
      'position':3
    },
    {
      'name':"باسل العبدلي",
      'bio': "Socks are just portable carpets",
      'imageURL': "https://cdn.britannica.com/s:300x300/58/129958-004-C9B8B89D.jpg",
      'points':970,
      'position':4
    },
  ]

export default class App extends React.Component {

  render() {
    return (
      
        this.state.fontLoaded ? <View style={styles.container}>
        <FlatList
            style={styles.flatView}
            data={content}
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
      </View>:null
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    justifyContent: 'center',
    flexDirection:'column',
  },
  flatView:{
    flexGrow:0
  }
});
