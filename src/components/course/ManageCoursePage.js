/**
 * Component Hierarchy
 * ===================
 *
 * -- ManageCoursePage
 *    -- CourseForm
 *       -- TextInput
 *       -- SelectInput
 */

import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as courseActions from 'actions/courseActions';

import CourseForm from 'components/course/CourseForm';


class ManageCoursePage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    };
  }

  render() {
    const {course} = this.props;

    return (
      <div>
        <CourseForm
          allAuthors={[]}
          course={this.state.course}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
};

let mapStateToProps = (state, ownProps) => {
  let course = {
    id: '',
    watchHref: '',
    title: '',
    authorId: '',
    length: '',
    category: '',
  };
  return {
    course: course
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
)(ManageCoursePage);
