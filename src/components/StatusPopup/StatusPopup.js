import React from 'react';
import PropTypes from 'prop-types';

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
        <button className="status-popup-button" onClick={props.closePopup}>close</button>
      </div>);
  }

  if (props.type === 'success') {
    popup = (
      <div className="status-popup status-popup--success">
        <p>успешно отправлено</p>
        <button className="status-popup-button" onClick={props.closePopup}>close</button>
      </div>);
  }

  return props.visible ? popup : null
}

StatusPopup.propTypes = propTypes;

StatusPopup.defaultProps = defaultProps;

export default StatusPopup;