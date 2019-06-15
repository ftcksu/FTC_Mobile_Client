import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import FTC from './src/Screens/FTC';

export default class App extends React.Component {

  render() {
    return (
      // wrap this component with <SafeAreaView> ?
        <FTC />
    );
  }
}