import React from 'react';

const CardDisplay = ({
  question,
  answer,
  showAnswerFlag,
  showAnswer,
  cardKey,
  divStyle,
}) => {
  console.log(
    'question = ',
    question,
    ', answer =',
    answer,
    ', showAnswerFlag =',
    showAnswerFlag,
    'cardKey =',
    cardKey
  );
  // show-answer will flip the card.
  const newClassName = showAnswerFlag ? 'card show-answer' : 'card';

  return (
    <div
      className={newClassName}
      role="button"
      onClick={() => showAnswer({ cardKey })}
    >
      <div className="inner-card">
        <div className="inner-card-front" style={divStyle}>
          <p> {question}</p>
        </div>
        <div className="inner-card-back">
          <p> {answer}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDisplay;
