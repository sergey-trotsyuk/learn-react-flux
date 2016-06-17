import React from 'react';
import classNames from 'classnames';

import styles from './Paragraph.css';

export default class Paragraph extends React.Component {
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
      <p {...props}>{this.props.children}</p>
    );
  }
};
