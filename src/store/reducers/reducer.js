import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
  data: []
};

const initData = (state, action) => {
  console.log('meme');
  return updateObject(state, {
    data: action.data
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_DATA: return initData(state, action);
    default: return state;
  }
};

export default reducer;
