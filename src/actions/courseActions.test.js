/**
 * Tests action creators and thunks.
 */

import expect from 'expect';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as courseActions from 'actions/courseActions';
import * as types from 'constants/ActionTypes';


// Test a sync option
describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      // arrange
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course,
      }

      // act
      const action = courseActions.createCourseSuccess(course);

      // assert
      expect(action).toEqual(expectedAction);
    });
  });
});


const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
    /**
     * Here's an example of a call to nock:
     *
     *   nock('http://example.com/')
     *     .get('/courses')
     *     .reply(200, {
     *       body: {
     *         course: [{
     *           id: 1,
     *           firstName: 'Cory',
     *           lastName: 'House',
     *         }],
     *       }
     *     });
     */

    const expectedActions = [
      {
        type: types.BEGIN_AJAX_CALL,
      },
      {
        type: types.LOAD_COURSES_SUCCESS,
        body: {
          courses: [
            {
              id: 'clean-code',
              title: 'Clean Code',
            },
          ],
        },
      },
    ]

    const store = mockStore({
      courses: [],
    }, expectedActions);

    store.dispatch(courseActions.loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      done();
    });

  });
});
