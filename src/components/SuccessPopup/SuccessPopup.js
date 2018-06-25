import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import './SuccessPopup.scss';

const propTypes = {
  visible: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
}


const SuccessPopup = props => (
  props.visible ? <div className="success"><p>успешно отправлено</p><Button className="success-button" onClick={props.closePopup}>close</Button></div> : null
);

SuccessPopup.propTypes = propTypes;


export default SuccessPopup;