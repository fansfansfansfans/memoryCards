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
import SHOW_ANSWER, { POPULATE_CARDS } from '../constants/actionTypes';

const showAnswer = cardKey => {
  console.log('actionCreator: showAnswer');

  return {
    type: SHOW_ANSWER,
    payload: cardKey,
  };
};

const populateCards = cards => {
  console.log('actionCreator: populateCards payload', cards);

  return {
    type: POPULATE_CARDS,
    payload: cards,
  };
};

// add more action creators

export { showAnswer as default, populateCards };
