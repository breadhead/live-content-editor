import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  text: PropTypes.string
}

const defaultProps = {
  className: '',
  text: ''
}

const Title = ({ text, className, type, ...restProps }) => {
    const props = {
      text,
      className: `title ${className}`,
      ...restProps
    }

    return React.createElement(type, props)
}


Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
