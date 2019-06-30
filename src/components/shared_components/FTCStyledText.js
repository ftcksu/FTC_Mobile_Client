import React from 'react';
import { Text } from 'react-native';

export class FTCStyledText extends React.Component {
  
  render() {
    console.log(this.props);
    return( <Text numberOfLines={this.props.numberOfLines} style={this.props.style}> {this.props.children} </Text>);
  }
}
