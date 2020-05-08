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
import SHOW_ANSWER, {
  POPULATE_CARDS,
  ADD_CARD,
} from '../constants/actionTypes';

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

const addCard = () => {
  console.log('actionCreator: addCard');

  return {
    type: ADD_CARD,
  };
};

// add more action creators

export { showAnswer as default, populateCards, addCard };
