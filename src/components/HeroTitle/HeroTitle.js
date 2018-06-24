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
    this.setState({title: e.target.value})
  }

  render() {
    if (this.props.isEditing) {
      return <Input className="hero__title" onInputValueChange={this.onInputValueChange} />
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