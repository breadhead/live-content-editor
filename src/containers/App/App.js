import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import * as actionTypes from '../../store/actions/actionTypes';

import Hero from '../../views/Hero/Hero';
import Text from '../../views/Text/Text';
import Loader from '../../components/Loader/Loader';
import StatusPopup from '../../components/StatusPopup/StatusPopup';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  getData: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  visibleError: PropTypes.bool.isRequired,
  visibleSuccess: PropTypes.bool.isRequired,
  closeErrorPopup: PropTypes.func.isRequired,
  closeSuccessPopup: PropTypes.func.isRequired,
  isRequestDone: PropTypes.bool.isRequired
}

class App extends Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <React.Fragment>
        <Loader isLoading={this.props.isRequestDone}>
          {this.props.data.map(item => {
            if (item.type === 'hero') {
              return <Hero key={item.id} data={item} setData={this.props.setData} />;
            }
            if (item.type === 'text') {
              return <Text key={item.id} data={item} setData={this.props.setData} />;
            }
            return null;
          })}
        </Loader>
        <StatusPopup type='error' visible={this.props.visibleError} errorMessage={this.props.errorMessage} closePopup={this.props.closeErrorPopup} />
        <StatusPopup type='success' visible={this.props.visibleSuccess} closePopup={this.props.closeSuccessPopup} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    errorMessage: state.errorMessage,
    visibleError: state.visibleError,
    visibleSuccess: state.visibleSuccess,
    isRequestDone: state.isRequestDone
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(actions.getData()),
    setData: (id, data) => dispatch(actions.setData(id, data)),
    closeErrorPopup: () => dispatch({ type: actionTypes.CLOSE_ERROR_POPUP }),
    closeSuccessPopup: () => dispatch({ type: actionTypes.CLOSE_SUCCESS_POPUP }),
  };
};

App.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(App);
