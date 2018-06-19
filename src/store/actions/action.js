import * as actionTypes from './actionTypes';

const test = (data) => {
  return {
    type: actionTypes.TEST,
    data
  }
}

export default { test };
