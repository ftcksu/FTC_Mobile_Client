import React from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity } from 'react-native';
import {FTCStyledText, ActionsCard} from '../../';


export class ActionCardList extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <FTCStyledText style={styles.listTitle} >
          {this.props.title}
        </FTCStyledText>

        <FlatList
          style={styles.flatView}
          data={this.props.listOfData}
          contentContainerStyle={{ flexGrow: 0 }}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={this.props.onPress}>
              <ActionsCard
              title={item.title}
              cardTypesIcon={item.type}
              />
            </TouchableOpacity>
              
          
          )}
        />
        {this.props.hasLineSeparator ? <View style={styles.lineBreak} /> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
  listTitle: {
    fontFamily: 'Cairo-Bold',
    textAlign: 'center',
    fontSize: 23,
  },
  lineBreak: {
    alignSelf: 'center',
    width: '80%',
    height: 5,
    backgroundColor: '#eeeeee',
  },
  flatView: {
    flexGrow: 0
  }
});
