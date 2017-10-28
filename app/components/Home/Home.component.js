import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TextArea from '../TextArea/TextArea.component';
import PropTypes from 'prop-types';
import styles from './Home.component.style';

class Home extends Component {
  addNote = () => {
    const {saveNote, title, text} = this.props;
    if (title && text) {
      saveNote({title, text});
    }
  }
  render () {
    const {setTitle, title, text, setText} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.titleHeading}> Note Title</Text>
        <TextArea style={styles.titleTextInput}
            onChangeText={setTitle} value={title} />
        <Text style={styles.textAreaTitle}> Please type your note below </Text>
        <TextArea style={styles.textArea} multiline = {true}
          onChangeText={setText} value={text}/>
        <View style={styles.bottomBarWrapper}>
          <TouchableOpacity style={styles.touchable} onPress={this.addNote}>
            <Text style={styles.saveBtn} >Save</Text>
          </TouchableOpacity>
          <Text style={styles.characterCount}>{text.length} characters</Text>
        </View>
      </View>
    );
  }
}

Home.defaultProps = {};

Home.propTypes = {
  setTitle: PropTypes.func,
  setText: PropTypes.func,
  title: PropTypes.string,
  saveNote: PropTypes.func,
  notes: PropTypes.array,
  text: PropTypes.string
};

export default Home;
