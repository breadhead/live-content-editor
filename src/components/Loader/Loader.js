import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../Spinner/Spinner';

import './Loader.scss';

const Loader = props => (props.isLoading ? props.children : <Spinner />);

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default Loader;
