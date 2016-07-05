/**
 * src/actions/authorActions.js
 */

import {beginAjaxCall} from 'actions/ajaxStatusActions';
import authorApi from 'api/mockAuthorApi';
import * as types from 'constants/ActionTypes';


export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return authorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  }
}
