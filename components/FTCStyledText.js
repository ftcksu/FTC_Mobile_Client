import React from 'react';
import { Text } from 'react-native';
import { Font } from 'expo';

export class FTCStyledText extends React.Component {
    // state = {
    //     fontLoaded: false,
    //   };
    
    // componentDidMount() {
    //     Font.loadAsync({
    //       'Cairo-Black': require('../assets/fonts/Cairo-Black.ttf'),
    //     });
    //         this.setState({ fontLoaded: true });

    //   }
  render() {
    return( <Text {...this.props} style={[this.props.style, { fontFamily: 'monospace' }]} />);
  }
}
