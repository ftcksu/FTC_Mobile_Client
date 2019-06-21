import React from 'react'
import { StyleSheet, FlatList, View, TouchableOpacity } from 'react-native'
import UserPointCard from '../../UserPointCard'


/*
            props: array named data, has 5 attribute per index(bio,name,imageURL,position,points)
*/

export default class App extends React.Component {

  render() {
    return (
        <View style={styles.container}>

        <FlatList
            style={[styles.flatView,this.props.style]}
            data={this.props.data}
            contentContainerStyle={{ flexGrow: 0 }}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={this.props.handelOnCardPress} >
                <UserPointCard
                  bio={item.bio}
                  name={item.user.first_name+" "+item.user.last_name}
                  imageURL={item.user.profilephoto_full_link}
                  position={index + 1 }
                  points={item.user.points}/>
              </TouchableOpacity>
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

