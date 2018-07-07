import React from 'react';
import PropTypes from 'prop-types';

const withEditing = Component => {
  const ComponentWithEditing = props => {
    const { saveResult, ...rest } = props;
    return <Component contentEditable suppressContentEditableWarning onBlur={props.saveResult} {...rest} />
  }
  ComponentWithEditing.propTypes = {
    saveResult: PropTypes.func.isRequired
  }


  return ComponentWithEditing
}

export default withEditing;
