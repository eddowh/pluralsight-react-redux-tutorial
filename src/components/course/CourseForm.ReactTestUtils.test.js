/**
 * Using React Test Utils.
 */

import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import CourseForm from 'components/course/CourseForm';


function setUp(saving=false) {
  let props = {
    course: {},
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  }
  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer,
  };
}

describe('CourseForm via React Test utils', () => {
  it('renders form and h1', () => {
    const {output} = setUp();
    expect(output.type).toBe('form');
    let [h1] = output.props.children;
    expect(h1.type).toBe('h1');
  });

  it('save button is labeled "Save" when not saving', () => {
    const {output} = setUp(false);
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe('Save');
  });

  it('save button is labeled "Saving..." when saving', () => {
    const {output} = setUp(true);
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe('Saving...');
  });
});
