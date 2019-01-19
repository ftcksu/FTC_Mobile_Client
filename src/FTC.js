import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { connect } from 'react-redux';
import InfoCardList from './components/InfoCardList';
import { fontLoaded } from './actions';
import content from './dummy_data/InfoCardData.json';
import { data } from './dummy_data/UserPointCardData';
import { UserPointCard } from './components/UserPointCard';

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

  renderUserPointCard() {
    return (
        <UserPointCard
        points={data.points}
        name={data.name}
        bio={data.bio}
        imageURL={data.image}
        />
    );
  }

  render() {
    return (
      <View style={styles.container}>
      {this.renderUserPointCard()}
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
