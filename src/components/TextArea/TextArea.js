import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
  id: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  rows: PropTypes.string
}

const defaultProps = {
  id: '',
  value: '',
  className: '',
  onChange: null,
  rows: '4'
}

class TextArea extends Component {
  state = {
    value: this.props.value
  }

  TextAreaChangeHandler = evt => {
    const { value } = evt.target;
    const { onChange } = this.props;
    this.setState({ value });
    if (onChange) {
      onChange(value);
    }
  };

  render() {
    return (
      <textarea
        className={this.props.className}
        id={this.props.id}
        rows={this.props.rows}
        value={this.state.value}
        onChange={this.TextAreaChangeHandler}
      />
    )
  }
}


TextArea.propTypes = propTypes;

TextArea.defaultProps = defaultProps;

export default TextArea;