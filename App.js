import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import FTC from './src/Screens/FTC';

export default class App extends React.Component {

  render() {
    // note that Provider tag can only take one child component.
    // wrap with view tag if there's more than one.

    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <FTC />
      </Provider>
    );
  }
}