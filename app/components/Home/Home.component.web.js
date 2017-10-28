import React, {Component} from 'react';

import TextArea from '../TextArea/TextArea.component';
import PropTypes from 'prop-types';
import styles from './Home.component.style';
import Link from '../Link/Link.component';

class Home extends Component {
  addNote = () => {
    const {saveNote, title, text} = this.props;
    if (title && text) {
      saveNote({title, text});
    }
  }
  render () {
    const {setTitle, title, text, setText, linkToOpen} = this.props;
    return (
      <div style={styles.container}>
        <p style={styles.titleHeading}> Note Title</p>
        <TextArea style={styles.titleTextInput}
            onChangeText={setTitle} value={title} />
        <p style={styles.textAreaTitle}> Please type your note below </p>
        <TextArea style={styles.textArea} multiline = {true}
          onChangeText={setText} value={text}/>
        <div style={styles.bottomBarWrapper}>
          <span style={styles.touchable} onClick={this.addNote}>
            <p style={styles.saveBtn} >Save</p>
          </span>
          <p style={styles.characterCount}>{text.length} characters</p>
        </div>
        <Link link={linkToOpen} text='Click here to open'/>
      </div>
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
  text: PropTypes.string,
  linkToOpen: PropTypes.string
};

export default Home;
