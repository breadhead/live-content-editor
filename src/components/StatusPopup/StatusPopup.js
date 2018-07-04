import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

const propTypes = {
  errorMessage: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
}

const defaultProps = {
  errorMessage: 'no error message'
}

const StatusPopup = props => {

  let popup;

  if (props.type === 'error') {
    popup = (
      <div className="status-popup status-popup--error">
        <p>{`error: ${props.errorMessage || 'unhandled error'}`}</p>
        <Button className="status-popup-button" onClick={props.closePopup}>close</Button>
      </div>);
  }

  if (props.type === 'success') {
    popup = (
      <div className="status-popup status-popup--success">
        <p>успешно отправлено</p>
        <Button className="status-popup-button" onClick={props.closePopup}>close</Button>
      </div>);
  }

  return props.visible ? popup : null
}

StatusPopup.propTypes = propTypes;

StatusPopup.defaultProps = defaultProps;

export default StatusPopup;