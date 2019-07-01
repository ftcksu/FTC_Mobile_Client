import React from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity } from 'react-native';
import { FTCStyledText, InfoCard } from './';


export class InfoCardList extends React.Component {



  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <FTCStyledText style={[styles.listTitle, this.props.titleStyle]} >
          {this.props.title}
        </FTCStyledText>

        <FlatList
          style={styles.flatView}
          ListEmptyComponent={this.props.renderEmptyListComponent}
          data={this.props.listOfData}
          contentContainerStyle={{ flexGrow: 0 }}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.props.onPress(item)}>
              <InfoCard
              title={item.name}
              subtitle={item.description}
              cardTypesIcon={item.type}
              isBoss={item.is_leader}
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
    paddingTop:10,
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
