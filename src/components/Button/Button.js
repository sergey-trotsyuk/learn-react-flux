import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

import $ from 'jquery';
import 'jquery-ui/tooltip';

import styles from './Button.css';

export default class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.string
  }

  static defaultProps = {
    onClick: () => {},
    children: ''
  }

  buttonNode = null;

  componentDidMount() {
    $(this.buttonNode).tooltip();
  }

  componentWillUnmount() {
    $(this.buttonNode).tooltip('destroy');
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
      <button
        {...props}
        ref={(node) => this.buttonNode = node}
        title={this.props.children}>{this.props.children}</button>
    );
  }
};
