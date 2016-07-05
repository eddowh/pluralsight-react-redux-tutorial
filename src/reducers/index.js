/**
 * src/reducers/index.js
 */

import {combineReducers} from 'redux';

import courses from 'reducers/courseReducer';
import authors from 'reducers/authorReducer';
import ajaxCalls from 'reducers/ajaxStatusReducer';


const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCalls,
});

export default rootReducer;
