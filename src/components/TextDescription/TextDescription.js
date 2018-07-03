import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextArea from '../TextArea/TextArea';

const propTypes = {
  description: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]).isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired
}

class TextDescription extends Component {
  state = {
    description: this.props.description
  }

  onTextAreaChange = (e) => {
    this.props.handleChange('description', e);
    this.setState({ description: e })
  }

  render() {
    if (this.props.isEditing) {
      return (
        <div className="text__edit-field text__edit-field--description">
          <label className="text__label" htmlFor="text-description">текст:</label>
          <TextArea className="text__textarea" id="text-description" onChange={this.onTextAreaChange} value={this.state.description} />
        </div>)
    }

    if (typeof this.state.description === 'object') {
      return (
        <article className="text__description">
          {this.state.description[0].replace(/\n/g, '*').split('*').map(item => <p key={item[0]} className="text__description">{item}</p>)}
        </article>
      )
    }

    return (<p className="text__description">{this.state.description}</p>)
  }
}

TextDescription.propTypes = propTypes;

export default TextDescription;
