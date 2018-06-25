import React from 'react';
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


const Button = (props) => (
  <button
    className={props.className}
    onClick={props.onClick}>
    {props.children}
  </button>
);


Button.propTypes = propTypes;

Button.defaultProps = defaultProps;

export default Button;
