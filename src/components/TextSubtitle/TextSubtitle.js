import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input/Input';

const propTypes = {
  subtitle: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired
}

class HeroTitle extends Component {
  state = {
    subtitle: this.props.subtitle
  }

  onInputValueChange = (e) => {
    this.props.handleChange('subtitle', e.target.value);
    this.setState({ subtitle: e.target.value })
  }

  render() {
    if (this.props.isEditing) {
      return (
        <div className="text__edit-field text__edit-field--subtitle">
          <label className="text__label" htmlFor="text-subtitle">подзаголовок:</label>
          <Input className="text__input" id="text-subtitle" onInputValueChange={this.onInputValueChange} value={this.state.subtitle} />
        </div>)
    }

    return (
      <h3 className="text__subtitle">
      {this.state.subtitle}
    </h3>
    )
  }
}

HeroTitle.propTypes = propTypes;

export default HeroTitle;