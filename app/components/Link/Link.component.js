import React, {Component} from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

class Link extends Component {
  onLinkClick = () => {
    // eslint-disable-next-line
    console.log(this.props.link);  //TODO This link should be opened in a browser
    // Hint Use React native Linking at
    // https://facebook.github.io/react-native/docs/linking.html#opening-external-links
  }
  render () {
    const {text} = this.props;

    return (
      <Text onPress={this.onLinkClick}>{text}</Text>
    );
  }
}

Link.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string
};

export default Link;
