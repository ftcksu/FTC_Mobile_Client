import React from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity } from 'react-native';
import FTCStyledText from './FTCStyledText';
import InfoCard  from './InfoCard';


export default class InfoCardList extends React.Component {

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
              <InfoCard
              title={item.title}
              subtitle={item.subTitle}
              cardTypesIcon={item.type}
              />
            </TouchableOpacity>
          )}
        />
        {console.log('this.props.hasLineSeparator')}
        {console.log(this.props.hasLineSeparator)}
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
