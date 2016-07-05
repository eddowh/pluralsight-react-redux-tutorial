/**
 * src/actions/authorActions.js
 */

import authorApi from 'api/mockAuthorApi';
import * as types from 'constants/ActionTypes';


export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return function(dispatch) {
    return authorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  }
}
