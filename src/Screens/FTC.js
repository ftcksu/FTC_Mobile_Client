import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { connect } from 'react-redux';
import { fontLoaded } from '../actions';
import Navigator from '../Navigator'
import Login from './Login/LoginScreen'
import { PointsListScreen } from "./index";


class FTC extends React.Component {
  componentDidMount() {
    this.props.fontLoaded();
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.props.fontHasLoaded ?  <PointsListScreen /> : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    // marginTop:30
  }
});

const mapStateToProps = state => {
  const { fontHasLoaded } = state.appReducer
  return { fontHasLoaded }
}

export default connect(mapStateToProps, { fontLoaded })(FTC);
