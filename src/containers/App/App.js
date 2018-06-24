import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import Hero from '../../views/Hero/Hero';
import Text from '../../views/Text/Text';
import Loader from '../../components/Loader/Loader';
import ErrorPopup from '../../components/ErrorPopup/ErrorPopup';

const propTypes = {
  getData: PropTypes.func.isRequired,
  data: PropTypes.PropTypes.arrayOf(PropTypes.object).isRequired,
  errorMessage: PropTypes.string.isRequired,
  visibleError: PropTypes.bool.isRequired
}

const defaultProps = {

}

class App extends Component {
  state = {
    hero: {},
    text: {}
  }

  componentDidMount() {
    this.props.getData();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      Object.keys(nextProps.data).forEach((key) => {
        if (nextProps.data[key].type === "hero") {
          this.setState({ hero: nextProps.data[key] })
        }
        if (nextProps.data[key].type === "text") {
          this.setState({ text: nextProps.data[key] })
        }
      })
    }
  }


  render() {
    return (
      <React.Fragment>
        <Loader isLoading={this.props.data.length > 0}>
          <Hero data={this.state.hero} />
          <Text data={this.state.text} />
        </Loader>
        <ErrorPopup visible={this.props.visibleError} errorMessage={this.props.errorMessage} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    errorMessage: state.errorMessage,
    visibleError: state.visibleError,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(actions.getData()),
  };
};

App.propTypes = propTypes;

App.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(App);
