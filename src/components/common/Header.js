/**
 * Header.
 *
 * Stateless component.
 */

import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

import LoadingDots from 'components/common/LoadingDots';


const Header = () => {
  return (
    <nav>
      <IndexLink to="/">Home</IndexLink>
      {" | "}
      <Link to="/courses">Courses</Link>
      {" | "}
      <Link to="/about">About</Link>
      <LoadingDots interval={100} dots={20} />
    </nav>
  )
}

export default Header;
