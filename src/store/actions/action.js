import * as actionTypes from './actionTypes';
import appData from './../../app-data';
import axios from '../../axios-data';

export const initData = data => {
  return {
    type: actionTypes.INIT_DATA,
    data
  };
};

export const showStatusPopup = message => {
  return {
    type: actionTypes.SHOW_ERROR_POPUP,
    message
  };
};

export const showSuccessPopup = () => {
  return {
    type: actionTypes.SHOW_SUCCESS_POPUP
  };
};


export const getData = () => dispatch => {
  axios.get(appData.endPoint)
    .then((response) => {
      dispatch(initData(response.data));
    })
    .catch((error) => {
      dispatch(showStatusPopup(error.message));
    });
};

export const setData = (id, data) => dispatch => {
  axios
    .put(`${appData.endPoint}/${id}`, data)
    .then((response) => {
      dispatch(showSuccessPopup(response.data));
    })
    .catch(error => {
      dispatch(showStatusPopup(error.message));
    })
};
