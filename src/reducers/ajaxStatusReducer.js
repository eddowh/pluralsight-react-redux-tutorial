/**
 * src/reducers/ajaxStatusReducer.js
 */

import * as types from 'constants/ActionTypes';
import * as states from 'constants/InitialStates';


function stringEndsWith(string, trailingString) {
  return string.substring(string.length - trailingString.length) == trailingString;
}

export default function ajaxStatusReducer(state = states.NUM_AJAX_CALLS_IN_PROGRESS, action) {
  if (action.type == types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (action.type === types.AJAX_CALL_ERROR || stringEndsWith(action.type, '_SUCCESS')) {
    return state - 1;
  }

  return state;
}
