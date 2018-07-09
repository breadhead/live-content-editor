import * as actionTypes from '../actions/actionTypes';

const initialState = {
  data: [],
  isRequestDone: false,
  visibleError: false,
  visibleSuccess: false,
  errorMessage: ''
};

const initData = (state, action) => { return { ...state, ...{ data: action.data, isRequestDone: true } } }

const showErrorPopup = (state, action) => { return { ...state, ...{ visibleError: true, errorMessage: action.message.toLowerCase() } } }

const showSuccessPopup = state => { return { ...state, ...{ visibleSuccess: true } } }

const closeErrorPopup = state => { return { ...state, ...{ visibleError: false } } }

const closeSuccessPopup = state => { return { ...state, ...{ visibleSuccess: false } } }

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
