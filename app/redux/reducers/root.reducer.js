import {combineReducers} from 'redux';
import test from './test.reducer';
import content from './content.reducer';
import Router from '../../routes';

const nav = (state, action) => (
  Router.router.getStateForAction(action, state) || state
);

export default combineReducers({
  test,
  content,
  nav
});