/**
 * src/actions/courseActions.js
 */

import * as types from 'constants/ActionTypes';


export function createCourse(course) {
  return { type: types.CREATE_USER, course }
}
