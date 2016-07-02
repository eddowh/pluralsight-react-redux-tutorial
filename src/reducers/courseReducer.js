/**
 * src/reducers/courseReducer.js
 */

import * as types from 'constants/ActionTypes';


const initialState = [];

export default function courseReducer(state = initialState, action) {
  switch(action.type) {
    case types.CREATE_USER:
      return [
        ...state,
        Object.assign({}, action.course),
      ]

    default:
      return state;
  }
}
