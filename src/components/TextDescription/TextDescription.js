import React, { Component } from 'react';
import PropTypes from 'prop-types';
import nanoId from 'nanoid';

import Input from '../Input/Input';

const propTypes = {
  description: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]).isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired
}

class TextDescription extends Component {
  state = {
    description: this.props.description
  }

  onInputValueChange = (e) => {
    this.props.handleChange('description', e.target.value);
    this.setState({ description: e.target.value })
  }

  render() {
    if (this.props.isEditing) {
      return (
        <div className="text__edit-field text__edit-field--description">
          <label className="text__label" htmlFor="text-description">текст:</label>
          <Input className="text__input" id="text-description" onInputValueChange={this.onInputValueChange} value={this.state.description} />
        </div>)
    }


    if (typeof this.state.description === 'object') {
      return (
        <article className="text__description">
          {this.state.description[0].replace(/\n/g, '*').split('*').map(item => <p key={nanoId()} className="text__description">{item}</p>)}
        </article>
      )
    }

    return (<p className="text__description">{this.state.description}</p>)
  }
}

TextDescription.propTypes = propTypes;

export default TextDescription;
