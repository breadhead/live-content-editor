import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string.isRequired
}

class Button extends Component {
    getConsoleLog = () => console.log('button clicked');

    render() {
      return (
      <button
        className={this.props.className}
        onClick={this.getConsoleLog}>
        click me!
        </button>
      );
    }
}

Button.propTypes = propTypes;

export default Button;
