/**
 * src/reducers/courseReducer.js
 */

import * as types from 'constants/ActionTypes';


const initialState = [];

export default function courseReducer(state = initialState, action) {
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    default:
      return state;
  }
}
