import React from 'react';
import PropTypes from 'prop-types';

const withEditing = Component => class extends React.Component {
    static propTypes = {
      saveResult: PropTypes.func.isRequired
    }

    render() {
      return <Component contentEditable suppressContentEditableWarning onBlur={this.props.saveResult} {...this.props} />
    }
  }

export default withEditing;
