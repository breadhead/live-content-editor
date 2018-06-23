import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Text.scss';

const propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    textAlign: PropTypes.string,
    backgroundImg: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
}

class Text extends Component {
  state = {
    
  }
  render() {
    console.log('text', this.props.data);
    return (
      <section className="text">
        <div className="container">
          <div className="text__content">
            <h2 className="text__title">
              {this.props.data.title}
            </h2>
            <h3 className="text__subtitle">
            {this.props.data.subtitle}
            </h3>
            <p className="text__description">
            {this.props.data.description.splice('/n')}
            </p>
          </div>
        </div>
      </section>
    )
  }
}

Text.propTypes = propTypes;

export default Text;