import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import './EditButton.scss';

const propTypes = {
  onClick: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired
}

const EditButton = props => (
  <Button
    className={`button button__editor ${props.isEditing ? 'button__editor--save' : 'button__editor--edit'}`}
    onClick={props.onClick}
  />
);


EditButton.propTypes = propTypes;

export default EditButton;