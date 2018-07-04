import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input/Input';

const propTypes = {
  src: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired
}

class HeroVideo extends Component {
  state = {
    src: this.props.src
  }

  onInputValueChange = (e) => {
    this.props.handleChange('src', e.target.value);
    this.setState({ src: e.target.value })
  }

  render() {
    if (this.props.isEditing) {
      return (
        <div className="hero__edit-field hero__edit-field--extra hero__edit-field--video">
          <label className="hero__label" htmlFor="hero-video">ссылка для фонового видео:</label>
          <Input className="hero__input" id="hero-video" onInputValueChange={this.onInputValueChange} value={this.state.src} />
        </div>
      )
    }

    return (
      <video className="hero__video" src={this.state.src} loop muted />
    )
  }
}

HeroVideo.propTypes = propTypes;

export default HeroVideo;