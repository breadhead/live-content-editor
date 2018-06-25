import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
  data: [],
  visibleError: false,
  visibleSuccess: false,
	errorMessage: ''
};

const initData = (state, action) => updateObject(state, {
  data: action.data
});

const showErrorPopup = (state, action) => updateObject(state, { visibleError: true, errorMessage: action.message.toLowerCase() })

const showSuccessPopup = (state) => updateObject(state, { visibleSuccess: true })

const closeErrorPopup = (state) => updateObject(state, { visibleError: false});

const closeSuccessPopup = (state) => updateObject(state, { visibleSuccess: false});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_DATA: return initData(state, action);
    case actionTypes.SHOW_ERROR_POPUP: return showErrorPopup(state, action);
    case actionTypes.SHOW_SUCCESS_POPUP: return showSuccessPopup(state, action);
    case actionTypes.CLOSE_ERROR_POPUP: return closeErrorPopup(state, action);
    case actionTypes.CLOSE_SUCCESS_POPUP: return closeSuccessPopup(state, action);
    default: return state;
  }
};

export default reducer;
