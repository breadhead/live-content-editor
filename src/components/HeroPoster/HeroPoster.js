import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input/Input';

const propTypes = {
  poster: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  handleChange: PropTypes.func.isRequired
}

class HeroPoster extends Component {
  state = {
    poster: this.props.poster
  }

  onInputValueChange = (e) => {
    this.props.handleChange('poster', e.target.value);
    this.setState({ poster: e.target.value })
  }

  render() {
    return (
      <section className="hero" style={{ backgroundImage: `url(${this.state.poster})` }}>
        {this.props.isEditing && (
          <div className="hero__edit-field hero__edit-field--extra hero__edit-field--poster">
            <label className="hero__label" htmlFor="hero-poster">ссылка для фоновой картинки:</label>
            <Input className="hero__input" id="hero-poster" onInputValueChange={this.onInputValueChange} value={this.state.poster} />
          </div>
        )}
        {this.props.children}
      </section>
    )
  }
}

HeroPoster.propTypes = propTypes;

export default HeroPoster;