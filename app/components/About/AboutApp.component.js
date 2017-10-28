import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './AboutApp.styles.js';
import result from 'lodash/result';

class AboutApp extends Component {
  render () {
    const navigatingFrom = result(this.props, 'navigation.state.params.navigatingFrom', '');
    return (
      <View style={styles.container}>
        <Text>About the App </Text>
        {navigatingFrom ? <Text>Navigating from: {navigatingFrom} </Text> : null}
        <Text style={styles.centerAlign}>
          {'\n\n'}This app demonstrates the capabilities of react-native. {'\n\n'}This is a simple note taking application which helps you store your notes on your device.
        </Text>
      </View>
    );
  }
}

AboutApp.defaultProps = {
};
AboutApp.propTypes = {
};

export default AboutApp;
