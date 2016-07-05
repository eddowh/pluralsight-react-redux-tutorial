/**
 * Main app container.
 */

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import Header from 'components/common/Header';


class App extends Component {
  render() {
    return (
      <div>
        <Header loading={this.props.loading} />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCalls > 0
  };
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default connect(
  mapStateToProps
)(App);
