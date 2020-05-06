/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

import SHOW_ANSWER from '../constants/actionTypes';

const initialState = {
  showAnswerFlag: true,
};

const memoryReducer = (state = initialState, action) => {
  console.log(
    `memoryReducer: type = ${action.type},  payload = ${action.payload}`
  );
  switch (action.type) {
    // cases are the subscribers
    case SHOW_ANSWER: {
      // reassign states location as the user input
      const showAnswerFlag = !state.showAnswerFlag;
      return {
        ...state,
        showAnswerFlag,
      };
    }

    default:
      return state;
  }
};

export default memoryReducer;
