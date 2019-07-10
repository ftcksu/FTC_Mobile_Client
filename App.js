//DEPRECATED @@@@@@@
import React from 'react';
import FTC from './src/Screens/FTC';
import { ActionSheetProvider } from '@expo/react-native-action-sheet'

export default class App extends React.Component {

  render() {
    return (
      // wrap this component with <SafeAreaView> ?
        <FTC/>
    );
  }
}