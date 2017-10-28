import {combineReducers} from 'redux';
import content from './content.reducer';
import notes from './notes.reducer';

export default combineReducers({
  content,
  notes
});
