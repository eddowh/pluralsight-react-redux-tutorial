/**
 * Component Hierarchy
 * ===================
 *
 * -- ManageCoursePage
 *    -- CourseForm
 *       -- (common) TextInput
 *       -- (common) SelectInput
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

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({
      course: course
    });
  }

  saveCourse(event) {
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
  }

  render() {
    return (
      <div>
        <CourseForm
          allAuthors={this.props.authors}
          onChange={this.updateCourseState}
          onSave={this.saveCourse}
          course={this.state.course}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
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
  const dropdownAuthors = state.authors.map(author => {
    return {
      value: author.id,
      text: `${author.firstName} ${author.lastName}`,
    };
  });
  return {
    course: course,
    authors: dropdownAuthors,
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
