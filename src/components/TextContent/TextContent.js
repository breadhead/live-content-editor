import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input/Input';

const propTypes = {
  textAlign: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  handleChange: PropTypes.func.isRequired
}

class TextContent extends Component {
  state = {
    textAlign: this.props.textAlign
  }

  onInputValueChange = (e) => {
    this.props.handleChange('textAlign', e.target.value);
    this.setState({ textAlign: e.target.value })
  }

  render() {
    return (
      <div className="text__content" style={{ textAlign: this.state.textAlign }}>
        {this.props.isEditing && (
          <div className="text__edit-field text__edit-field--textAlign">
            <label className="text__label" htmlFor="text-textAlign">выравнивание текста:</label>
            <Input className="text__input" id="text-textAlign" onInputValueChange={this.onInputValueChange} value={this.state.textAlign} />
          </div>
        )}
        {this.props.children}
      </div>
    )
  }
}

TextContent.propTypes = propTypes;

export default TextContent;