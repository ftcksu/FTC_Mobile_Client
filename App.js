import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import FTC from './src/FTC';

export default class App extends React.Component {

  render() {
    // note that Provider tag can only take one child component.
    // wrap with view tag if there's more than one.

    return (
      <Provider store={createStore(reducers)}>
        <FTC />
      </Provider>
    );
  }
}
