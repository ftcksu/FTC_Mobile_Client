import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { connect } from 'react-redux';
import { fontLoaded } from '../actions';
import { Home } from './home';
import  PointsListScreen from './PointsList/PointsListScreen';
import  EventsScreen from './Events/EventsScreen';
import  MyProfile from './MyProfile/myProfile';

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

  renderMyProfileScreen() {
    if (this.props.fontHasLoaded === true) {
      return <MyProfile/>
    }
    return null;
  }
  
  render() {
    return (
      <View >
      {this.renderMyProfileScreen()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 30,
    // justifyContent: 'center',
    flexDirection: 'column',
  }
});

const mapStateToProps = state => {
  const { fontHasLoaded } = state.appReducer;
  return { fontHasLoaded };
};

export default connect(mapStateToProps, { fontLoaded })(FTC);
