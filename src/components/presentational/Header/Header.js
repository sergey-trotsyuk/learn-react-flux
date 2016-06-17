import React from 'react';
import classNames from 'classnames';

import styles from './Header.css';

export default class Header extends React.Component {
  propTypes: {
    className: React.PropTypes.string
  }

  render() {
    // Classes
    var className = classNames(
      styles.normal,
      this.props.className
    );

    // Props
    var props = Object.assign({}, this.props, {
      className:  className
    });

    return (
      <h1 {...props}>{this.props.children}</h1>
    );
  }
};
