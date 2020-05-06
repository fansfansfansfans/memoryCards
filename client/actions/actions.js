/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import SHOW_ANSWER from '../constants/actionTypes';

const showAnswer = cardKey => {
  console.log('actionCreator: showAnswer');

  return {
    type: SHOW_ANSWER,
    payload: cardKey,
  };
};

// add more action creators

export { showAnswer as default };
