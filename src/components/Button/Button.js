import React, { Component } from 'react';
import PropTypes from 'prop-types';


const getConsoleLog = () => console.log('button clicked');

const propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.string
}

const defaultProps = {
  children: '',
  onClick: getConsoleLog
}

class Button extends Component {
  state = {}
  render() {
    return (
      <button
        className={this.props.className}
        onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = propTypes;

Button.defaultProps = defaultProps;

export default Button;
