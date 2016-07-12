/**
 * Integration tests!
 */

import expect from 'expect';
import {createStore} from 'redux';

import * as courseActions from 'actions/courseActions';
import * as states from 'constants/InitialStates';
import rootReducer from 'reducers';


describe('store', () => {
  it('should handle creating courses', () => {
    // arrange
    const store = createStore(rootReducer, {
      authors: states.AUTHORS,
      courses: states.COURSES,
    });
    const course = {
      title: 'Clean Code',
    };

    // act
    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);

    // assert
    const actual = store.getState().courses[0];  // just the first course
    const expected = {
      title: 'Clean Code',
    };

    expect(actual).toEqual(expected);
  });
});
