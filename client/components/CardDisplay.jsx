import React from 'react';

const CardDisplay = ({ data, showAnswerFlag, showAnswer }) => {
  console.log('data = ', data);
  // show-answer will flip the card.
  const setClassName = showAnswerFlag
    ? 'card active show-answer'
    : 'card active';
  return (
    <div id="cards-container" className="cards">
      <div className={setClassName} role="button" onClick={() => showAnswer()}>
        <div className="inner-card">
          <div className="inner-card-front">
            <p> {data.question}</p>
          </div>
          <div className="inner-card-back">
            <p> {data.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDisplay;
