import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { connect } from 'react-redux';
import { fontLoaded } from '../actions';
import { Home } from './index';
import PointsListScreen from './PointsList/PointsListScreen';
import EventsScreen from './Events/EventsScreen';
import Navigator from '../Navigator'


class FTC extends React.Component {
  componentDidMount() {
    this.props.fontLoaded();
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.props.fontHasLoaded ? <Navigator /> : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1
  }
});

const mapStateToProps = state => {
  const { fontHasLoaded } = state.appReducer
  return { fontHasLoaded }
}

export default connect(mapStateToProps, { fontLoaded })(FTC);
