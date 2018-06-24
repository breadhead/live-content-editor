import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input/Input';

const propTypes = {
  poster: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

class HeroTitle extends Component {
  state = {
    poster: this.props.poster
  }

  onInputValueChange = (e) => {
    this.setState({ poster: e.target.value })
  }

  styles = {
    backgroundImage: `url(${this.props.poster})`
  }


  render() {
    if (this.props.isEditing) {
      return (
        <div>
          <section
            className="hero"
            style={this.styles}
          >
            <div className="hero__edit-field hero__edit-field--poster">
              <label className="hero__label" htmlFor="hero-poster">ссылка для фоновой картинки:</label>
              <Input className="hero__input" id="hero-poster" onInputValueChange={this.onInputValueChange} value={this.state.poster} />
            </div>
            {this.props.children}
          </section>
        </div>)
    }

    return (
      <section
        className="hero"
        style={this.styles}
      >
        {this.props.children}
      </section>
    )
  }
}

HeroTitle.propTypes = propTypes;

export default HeroTitle;