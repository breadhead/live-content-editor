import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import './ErrorPopup.scss';

const propTypes = {
  errorMessage: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
}

const defaultProps = {
  errorMessage: 'unhandled error'
}

const ErrorPopup = props => (
  props.visible ? <div className="error"><p>{`error: ${props.errorMessage}`}</p><Button className="error-button" onClick={props.closePopup}>close</Button></div> : null
);

ErrorPopup.propTypes = propTypes;

ErrorPopup.defaultProps = defaultProps;

export default ErrorPopup;