import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import './StatusPopup.scss';

const propTypes = {
  errorMessage: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
}

const defaultProps = {
  errorMessage: 'unhandled error'
}

const StatusPopup = props => {

  let popup;

  if (props.type === 'error') {
    popup = <div className="error"><p>{`error: ${props.errorMessage}`}</p><Button className="error-button" onClick={props.closePopup}>close</Button></div>;
  }

  if (props.type === 'success') {
    popup = <div className="success"><p>успешно отправлено</p><Button className="success-button" onClick={props.closePopup}>close</Button></div>;
  }

  return (
    props.visible ? popup : null
  );
}

StatusPopup.propTypes = propTypes;

StatusPopup.defaultProps = defaultProps;

export default StatusPopup;