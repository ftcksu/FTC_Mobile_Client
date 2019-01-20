import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { connect } from 'react-redux';
import InfoCardList from './components/InfoCardList';
import { fontLoaded } from './actions';
import content from './dummy_data/InfoCardData.json';
import { data } from './dummy_data/UserPointCardData';
import { UserPointCard } from './components/UserPointCard';
import { Home } from './home';
import  PointsListScreen from './PointsList/PointsListScreen';

class FTC extends React.Component {
  componentDidMount() {
    this.props.fontLoaded();
  }

  renderInfoCard() {
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

  renderHomePage() {
    if (this.props.fontHasLoaded === true) {
      return <Home />;
    }
    return null;
  }
  renderPointListPage() {
    if (this.props.fontHasLoaded === true) {
      return <PointsListScreen/>;
    }
    return null;
  }

  render() {
    return (
      <View style={styles.container}>
      {this.renderPointListPage()}
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
