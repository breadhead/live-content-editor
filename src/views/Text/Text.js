import React, { Component } from 'react';
import PropTypes from 'prop-types';
import nanoId from 'nanoid';

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

  componentStyles = {
    backgroundImage: `url(${this.props.data.backgroundImg})`
  }

  contentStyles = {
    justifyContent: this.props.data.textAlign
  }

  render() {
    return (
      <section className="text" style={this.componentStyles}>
        <div className="container">
          <div className="text__content" style={this.contentStyles}>
            <h2 className="text__title">
              {this.props.data.title}
            </h2>
            <h3 className="text__subtitle">
              {this.props.data.subtitle}
            </h3>
            {this.props.data.description[0].replace(/\n/g, '***').split('***').map(item => <p key={nanoId()} className="text__description">{item}</p>)}
          </div>
        </div>
      </section>
    )
  }
}

Text.propTypes = propTypes;

export default Text;