/**
 * Component Hierachy
 * ==================
 *
 * -- HomePage
 */

import React, {Component} from 'react';
import {Link} from 'react-router';


export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Pluralsight Administration</h1>
        <p>React, Redux, and React Router in ES6</p>
        <Link to="about">Learn more</Link>
      </div>
    );
  }
}
