import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  onInputValueChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  required: PropTypes.bool
};

const defaultProps = {
  id: '',
  value: '',
  type: "text",
  className: null,
  name: null,
  readOnly: false,
  onChange: null,
  required: null
};

class Input extends Component {
  state = {
    value: this.props.value
  };

  inputChangeHandler = evt => {
    const { value } = evt.target;
    const { onChange } = this.props;
    this.setState({ value });

    if (onChange) {
      onChange(value);
    }
  };

  render() {
    return (
      <input
        type={this.props.type}
        id={this.props.id}
        className={this.props.className}
        name={this.props.name}
        value={this.state.value}
        readOnly={this.props.readOnly}
        required={this.props.required}
        onChange={this.inputChangeHandler}
        onInput={this.props.onInputValueChange}
      />
    );
  }
}

Input.propTypes = propTypes;

Input.defaultProps = defaultProps;

export default Input;
