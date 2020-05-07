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
import showAnswer, { populateCards } from '../actions/actions';

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
    populateCards: cards => dispatch(populateCards(cards)),
  };
}

class MainContainer extends Component {
  componentDidMount() {
    fetch('/api?category=security')
      .then(res => res.json())
      .then(cards => {
        console.log('MainContainer.componentDidMount: cards -', cards);
        // eslint-disable-next-line react/destructuring-assignment
        return this.props.populateCards(cards);
      })
      .catch(err =>
        console.log('MainContainer.componentDidMount: get cards: ERROR: ', err)
      );
  }

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
