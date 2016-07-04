/**
 * Component Hierarchy
 * ===================
 *
 * -- CoursePage
 *    -- CourseList
 *       -- CourseListRow
 */

import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as courseActions from 'actions/courseActions';

import CourseList from 'components/course/CourseList';


class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  courseRow(course, index) {
    return (
      <div key={index}>
        {course.title}
      </div>
    );
  }

  render() {
    const {courses} = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

let mapStateToProps = (state, ownProps) => {
  return {
    courses: state.courses,
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
