import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Link extends Component {
  render () {
    const {text, link} = this.props;
    return (
      <a href={link} target='_blank'>{text}</a>
    );
  }
}

Link.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string
};

export default Link;
