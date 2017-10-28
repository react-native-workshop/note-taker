import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setTitle, setText, addNote} from '../redux/actions/index.actions';
import Home from '../components/Home/Home.component';

class HomePage extends Component {
  render () {
    const {setTitle, setText, title, text, saveNote, notes} = this.props;
    const linkToOpen = 'http://google.co.in';
    return (
      <Home linkToOpen={linkToOpen} setTitle={setTitle} saveNote={saveNote} notes={notes} setText={setText} title={title} text={text} />
    );
  }
 }

HomePage.propTypes = {
  setTitle: PropTypes.func,
  setText: PropTypes.func,
  title: PropTypes.string,
  text: PropTypes.string,
  saveNote: PropTypes.func,
  notes: PropTypes.array
};

const mapStateToProps = (state) => ({
  title: state.content.title,
  text: state.content.text,
  notes: state.notes
});

const mapDispatchToProps = (dispatch) => ({
  setTitle: (title) => {
    dispatch(setTitle(title));
  },
  setText: (text) => dispatch(setText(text)),
  saveNote: (note) => {
    dispatch(addNote(note));
    dispatch(setTitle(''));
    dispatch(setText(''));
    alert('Saved Note: ' + note.title + ' ' + note.text);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
