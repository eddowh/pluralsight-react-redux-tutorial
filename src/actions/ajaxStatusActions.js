/**
 * src/actions/ajaxStatusActions.js
 */

import * as types from 'constants/ActionTypes';


export function beginAjaxCall() {
  return { type: types.BEGIN_AJAX_CALL };
}
