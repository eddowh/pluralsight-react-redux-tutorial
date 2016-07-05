/**
 * src/reducers/authorReducer.js
 */

import * as types from 'constants/ActionTypes';
import * as states from 'constants/InitialStates';


export default function authorReducer(state = states.AUTHORS, action) {
  switch(action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;

    default:
      return state;
  }
}
