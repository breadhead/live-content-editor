import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input/Input';

const propTypes = {
  src: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired
}

class HeroVideo extends Component {
  state = {
    src: this.props.src
  }

  onInputValueChange = (e) => {
    this.setState({ src: e.target.value })
  }

  render() {
    if (this.props.isEditing) {
      return (
        <React.Fragment>
          <label className="hero__label" htmlFor="hero-video">ссылка для фонового видео:</label>
          <Input className="hero__input" id="hero-video" onInputValueChange={this.onInputValueChange} value={this.state.src} />
        </React.Fragment>
      )
    }

    return (
      <video className="hero__video" src={this.state.src} autoPlay loop muted />
    )
  }
}

HeroVideo.propTypes = propTypes;

export default HeroVideo;