import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
}

const defaultProps = {
  className: '',
  children: ''
}

const TextElement = ({ className, children, type, ...restProps }) => {
  const props = {
    className: `title ${className}`,
    children: '',
    ...restProps
  }

  let splitedChildren;

  if (typeof children === 'object') {
    splitedChildren = children[0].replace(/\n/g, '*#').split('*#').map(item => <React.Fragment key={item[0]}>{item}<br /></React.Fragment>)
  }

  return React.createElement(type, props, splitedChildren || children)
}

TextElement.propTypes = propTypes;
TextElement.defaultProps = defaultProps;

export default TextElement;
