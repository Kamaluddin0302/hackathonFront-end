import {combineReducers} from 'redux';
import AuthReducer from './Authreducer.js';
import MainReducer from './MainReducer.js';

export default combineReducers({
  AuthReducer,
  MainReducer,
});
