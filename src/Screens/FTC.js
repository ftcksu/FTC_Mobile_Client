import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { connect } from 'react-redux';
import { fontLoaded } from '../actions';
import { Home } from './home';
import  PointsListScreen from './PointsList/PointsListScreen';
import  EventsScreen from './Events/EventsScreen';

class FTC extends React.Component {
  componentDidMount() {
    this.props.fontLoaded();
  }

  renderHomeScreen() {
    if (this.props.fontHasLoaded === true) {
      return <Home/>
    }
    return null;
  }

  renderPointListScreen() {
    if (this.props.fontHasLoaded === true) {
      return <PointsListScreen/>
    }
    return null;
  }
  renderEventsScreen() {
    if (this.props.fontHasLoaded === true) {
      return <EventsScreen/>
    }
    return null;
  }
  render() {
    return (
      <View style={styles.container}>
      {this.renderPointListScreen()}
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
