/**
 * src/reducers/index.js
 */

import {combineReducers} from 'redux';

import courses from 'reducers/courseReducer';


const rootReducer = combineReducers({
  courses,
});

export default rootReducer;
