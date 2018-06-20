import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import Button from '../../components/Button/Button';

const propTypes= {
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
        <p>hello world</p>
        <Button />
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
