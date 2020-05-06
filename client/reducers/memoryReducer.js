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

const generateRandomImage = () => {
  const imgUrlArray = [
    'Austin',
    'Ben',
    'Kyle',
    'Matt',
    'Mitchel',
    'Phillip',
    'Sam',
    'Sara',
    'Vessey',
    'Victoria',
  ];

  const imgIndex = Math.floor(Math.random() * Math.floor(imgUrlArray.length));

  const divStyle = {
    backgroundImage: `url(./images/${imgUrlArray[imgIndex]}.png)`,
  };
  console.log('divStyle =', divStyle);

  return divStyle;
};
const initCards = [
  {
    question: 'What must a variable begin with?',
    answer: 'A letter, $ or _',
    showAnswerFlag: false,
    divStyle: generateRandomImage(),
  },
  {
    question: 'What is a variable?',
    answer: 'Container for a piece of data',
    showAnswerFlag: false,
    divStyle: generateRandomImage(),
  },
  {
    question: 'Example of Case Sensitive Variable',
    answer: 'thisIsAVariable',
    showAnswerFlag: false,
    divStyle: generateRandomImage(),
  },
  {
    question: 'What must a variable begin with?',
    answer: 'A letter, $ or _',
    showAnswerFlag: false,
    divStyle: generateRandomImage(),
  },
  {
    question: 'What is a variable?',
    answer: 'Container for a piece of data',
    showAnswerFlag: false,
    divStyle: generateRandomImage(),
  },
  {
    question: 'Example of Case Sensitive Variable',
    answer: 'thisIsAVariable',
    showAnswerFlag: false,
    divStyle: generateRandomImage(),
  },
];

const initialState = {
  cards: initCards,
};

const memoryReducer = (state = initialState, action) => {
  console.log(
    `memoryReducer: type = ${action.type},  payload =`,
    action.payload
  );
  switch (action.type) {
    // cases are the subscribers
    case SHOW_ANSWER: {
      // reassign states location as the user input
      const { cardKey } = action.payload;
      const index = Number.parseInt(cardKey.replace('card', ''), 10);
      console.log('index =', index);
      const cards = state.cards.slice();
      const { showAnswerFlag } = cards[index];
      console.log('cards =', cards, 'showAnswerFlag =', showAnswerFlag);
      cards[index].showAnswerFlag = !showAnswerFlag;
      console.log('cards =', cards, 'showAnswerFlag =', showAnswerFlag);
      return {
        ...state,
        cards,
      };
    }

    default:
      return state;
  }
};

export default memoryReducer;
