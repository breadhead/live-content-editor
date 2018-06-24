import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import './EditButton.scss';

const propTypes = {
  onClick: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired
}

class EditButton extends Component {
  state = {}
  render() {
    return (
        <Button
          className={`button button__editor ${this.props.isEditing ? 'button__editor--save' : 'button__editor--edit'}`}
          onClick={this.props.onClick}
        />
    )
  }
}

EditButton.propTypes = propTypes;

export default EditButton;