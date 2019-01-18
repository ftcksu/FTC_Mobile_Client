import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import InfoCardList from './components/InfoCardList';
import { fontLoaded } from './actions';
import content from './dummy_data/InfoCardData.json';

class FTC extends React.Component {
  componentDidMount() {
    this.props.fontLoaded();
  }

  renderText() {
    if (this.props.fontHasLoaded === true) {
      return (
        <View style={styles.container}>
          <InfoCardList title={content.title} listOfData={content.data} hasLineSeparator />
        </View>
      );
    }
    return null;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderText()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    justifyContent: 'center',
    flexDirection: 'column',
  }
});

const mapStateToProps = state => {
  const { fontHasLoaded } = state.appReducer;
  return { fontHasLoaded };
};

export default connect(mapStateToProps, { fontLoaded })(FTC);
