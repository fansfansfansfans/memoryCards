/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders CardDisplay
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardDisplay from '../components/CardDisplay.jsx';
import showAnswer from '../actions/actions';

const mapStateToProps = state => {
  // add pertinent state here
  const { cards } = state.memoryReducer;
  return {
    // provide pertinent state here
    cards,
  };
};

function mapDispatchToProps(dispatch) {
  // return object of functions that will be merged to props object
  return {
    // create functions that will dispatch action creators
    showAnswer: cardKey => dispatch(showAnswer(cardKey)),
  };
}

class MainContainer extends Component {
  render() {
    const { cards } = this.props;

    const displayCards = cards.reduce((acc, card, index) => {
      const uniqueKey = `card${index}`;
      acc.push(
        <CardDisplay
          key={uniqueKey}
          question={card.question}
          answer={card.answer}
          showAnswerFlag={card.showAnswerFlag}
          // eslint-disable-next-line react/destructuring-assignment
          showAnswer={this.props.showAnswer}
          cardKey={uniqueKey}
          divStyle={card.divStyle}
        />
      );

      return acc;
    }, []);

    return (
      <div>
        <h1> Codesmith Memory Game </h1>
        <div id="cards-container">{displayCards}</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
