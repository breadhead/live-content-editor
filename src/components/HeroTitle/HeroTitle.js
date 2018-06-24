import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input/Input';

const propTypes = {
  title: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired
}

class HeroTitle extends Component {
  state = {
    title: this.props.title
  }

  onInputValueChange = (e) => {
    this.setState({ title: e.target.value })
  }

  render() {
    if (this.props.isEditing) {
      return (
        <div>
          <label className="hero__label" htmlFor="hero-video">заголовок:</label>
          <Input className="hero__input" onInputValueChange={this.onInputValueChange} value={this.state.title} />
        </div>)
    }

    return (
      <h1 className="hero__title">
        {this.state.title}
      </h1>
    )
  }
}

HeroTitle.propTypes = propTypes;

export default HeroTitle;