import React from 'react';
import { Text } from 'react-native';

export default class FTCStyledText extends React.Component {
  
  render() {
    return( <Text {...this.props} style={this.props.style} />);
  }
}
