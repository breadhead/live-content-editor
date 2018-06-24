import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input/Input';

const propTypes = {
  title: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired
}

class HeroTitle extends Component {
  state = {
    title: this.props.title
  }

  onInputValueChange = (e) => {
    this.props.handleChange('title', e.target.value);
    this.setState({ title: e.target.value })
  }

  render() {
    if (this.props.isEditing) {
      return (
        <div className="text__edit-field text__edit-field--title">
          <label className="text__label" htmlFor="text-title">заголовок:</label>
          <Input className="text__input" id="text-title" onInputValueChange={this.onInputValueChange} value={this.state.title} />
        </div>)
    }

    return (
      <h2 className="text__title">
        {this.state.title}
      </h2>
    )
  }
}

HeroTitle.propTypes = propTypes;

export default HeroTitle;