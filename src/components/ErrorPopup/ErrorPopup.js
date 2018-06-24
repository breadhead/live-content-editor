import React from 'react';
import PropTypes from 'prop-types';

import './ErrorPopup.scss';

const propTypes = {
  errorMessage: PropTypes.string,
  visible: PropTypes.bool.isRequired
}

const defaultProps = {
  errorMessage: 'unhandled error'
}

const ErrorPopup = (props) => (
  props.visible ? <div className='error'>{`you have an error: ${props.errorMessage}`}</div> : null
)

ErrorPopup.propTypes = propTypes;

ErrorPopup.defaultProps = defaultProps;

export default ErrorPopup;