import * as actionTypes from './actionTypes';
import appData from './../../app-data';
import axios from '../../axios-data';

export const initData = data => {
  return {
    type: actionTypes.INIT_DATA,
    data
  };
};

export const showErrorPopup = message => {
  return {
    type: actionTypes.SHOW_ERROR_POPUP,
    message
  };
};


export const getData = () => (dispatch) => {
  axios.get(appData.endPoint)
    .then((response) => {
      dispatch(initData(response.data));
    })
    .catch((error) => {
      dispatch(showErrorPopup(error.message));
    });
};
