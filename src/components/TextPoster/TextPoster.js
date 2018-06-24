import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input/Input';

const propTypes = {
  poster: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  handleChange: PropTypes.func.isRequired
}

class TextPoster extends Component {
  state = {
    poster: this.props.poster
  }

  onInputValueChange = (e) => {
    this.props.handleChange('poster', e.target.value);
    this.setState({ poster: e.target.value })
  }

  styles = {

  }

  render() {
    return (
      <section className="text" style={{ backgroundImage: `url(${this.state.poster})` }}>
        {this.props.isEditing && (
          <div className="text__edit-field text__edit-field--poster">
            <label className="text__label" htmlFor="text-poster">ссылка для фоновой картинки:</label>
            <Input className="text__input" id="text-poster" onInputValueChange={this.onInputValueChange} value={this.state.poster} />
          </div>
        )}
        {this.props.children}
      </section>
    )
  }
}

TextPoster.propTypes = propTypes;

export default TextPoster;