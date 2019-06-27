import React from 'react'
import { StyleSheet, FlatList, View, TouchableOpacity } from 'react-native'
import { UserPointCard } from './'


/*
            props: array named data, has 5 attribute per index(bio,name,imageURL,position,points)
*/

export class PointList extends React.Component {

  render() {
    return (
        <View style={styles.container}>

        <FlatList
            style={[styles.flatView,this.props.style]}
            data={this.props.data}
            contentContainerStyle={{ flexGrow: 0 }}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => this.props.onCardPress(item)} >
                <UserPointCard
                  bio={item.user.bio}
                  name={item.user.first_name+" "+item.user.last_name}
                  imageURL={item.user.profilephoto_b64}
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

