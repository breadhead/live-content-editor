import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  isEditable: PropTypes.bool
}

const defaultProps = {
  isEditable: false
}

const HeroTitle = (props) => (
  <h1
    onBlur={props.onBlur}
    onKeyPress={props.onKeyPress}
    contentEditable={props.isEditable}
    suppressContentEditableWarning={props.isEditable}
    className="hero__title">
    {props.title}
  </h1>);

HeroTitle.propTypes = propTypes;
HeroTitle.defaultProps = defaultProps;

export default HeroTitle;
