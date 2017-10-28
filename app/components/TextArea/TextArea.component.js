import React, {Component} from 'react';
import {TextInput} from 'react-native';

class TextArea extends Component {
  render () {
    const {...extraProps} = this.props;
    return (
      <TextInput {...extraProps} />
    );
  }
}


export default TextArea;
