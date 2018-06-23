import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import Hero from '../../views/Hero/Hero';

const propTypes = {
  getData: PropTypes.func.isRequired,
}

class App extends Component {
  state = {
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <React.Fragment>
        <Hero />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(actions.getData()),
  };
};

App.propTypes = propTypes;

export default connect(null, mapDispatchToProps)(App);
