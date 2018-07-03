import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
}

const HeroTitle1 = (props) => <h1 className="hero__title">{props.title}</h1>;

HeroTitle1.propTypes = propTypes;

export default HeroTitle1;
