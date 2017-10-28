import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {

  inputRef = (input) => {
    this.input = input;
  }
  onKeyPress = (e)  => {
    const val = (this.input || e.target).value;
    this.props.onChangeText((this.input || e.target).value);
    this.setInputValue(val);
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setInputValue(nextProps.value);
    }
  }
  
  setInputValue = (val) => {
    this.input.value = val;
  }

  render () {
    const {style, value, multiline = false} = this.props;

    return (
      multiline ?
        <textarea ref={this.inputRef} onKeyPress={this.onKeyPress} style={style} defaultValue={value} />
        :
        <input ref={this.inputRef} type='text' onKeyPress={this.onKeyPress} style={style} defaultValue={value} />
    );
  }

}

TextArea.propTypes = {
  onChangeText: PropTypes.func,
  style: PropTypes.object,
  value: PropTypes.string,
  multiline: PropTypes.bool
};

export default TextArea;
