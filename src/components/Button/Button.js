import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string
}

const defaultProps = {
  children: ''
}

class Button extends Component {
  getConsoleLog = () => console.log('button clicked');

  render() {
    return (
      <button
        className={this.props.className}
        onClick={this.getConsoleLog}>
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = propTypes;

Button.defaultProps = defaultProps;

export default Button;
