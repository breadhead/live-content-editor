import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
  test: ''
};

const test = (state, action) => {
  const { mememe } = action;
  return updateObject(state, {
    test: mememe
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_DATA: return test(state, action);
    default: return state;
  }
};

export default reducer;
