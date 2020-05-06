/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardDisplay from '../components/CardDisplay.jsx';
import showAnswer from '../actions/actions';
// import TotalsDisplay from '../components/TotalsDisplay';
// import MarketsContainer from './MarketsContainer';

// importing connected component from markets container
// const mapStateToProps = state => {
//   // add pertinent state here
//   const { marketList, totalCards } = state.marketsReducer;
//   return {
//     // provide pertinent state here
//     marketList,
//     totalCards,
//   };
// };
// function mapDispatchToProps(dispatch) {
//   //return object of functions that will be merged to props object
//   return {
//     // create functions that will dispatch action creators
//     addCard: marketId => dispatch(addCard(marketId)),
//     removeCard: marketId => dispatch(removeCard(marketId)),
//     addMarket: () => dispatch(addMarket()),
//     setNewLocation: event => dispatch(setNewLocation(event)),
//   };
// }
const mapStateToProps = state => {
  // add pertinent state here
  const { showAnswerFlag } = state.memoryReducer;
  return {
    // provide pertinent state here
    showAnswerFlag,
  };
};

function mapDispatchToProps(dispatch) {
  // return object of functions that will be merged to props object
  return {
    // create functions that will dispatch action creators
    showAnswer: () => dispatch(showAnswer()),
  };
}

class MainContainer extends Component {
  render() {
    const cardsData = [
      {
        question: 'What must a variable begin with?',
        answer: 'A letter, $ or _',
      },
      {
        question: 'What is a variable?',
        answer: 'Container for a piece of data',
      },
      {
        question: 'Example of Case Sensitive Variable',
        answer: 'thisIsAVariable',
      },
    ];
    const { showAnswerFlag } = this.props;

    return (
      <div>
        <button id="clear" className="clear btn">
          <i className="fas fa-trash"></i> Clear Cards
        </button>

        <h1>
          Memory Cards
          <button id="show" className="btn btn-small">
            <i className="fas fa-plus"></i> Add New Card
          </button>
        </h1>

        <CardDisplay
          data={cardsData[0]}
          showAnswerFlag={showAnswerFlag}
          // eslint-disable-next-line react/destructuring-assignment
          showAnswer={this.props.showAnswer}
        />

        <div className="navigation">
          <button id="prev" className="nav-button">
            <i className="fas fa-arrow-left"></i>
          </button>

          <p id="current"></p>

          <button id="next" className="nav-button">
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        <div id="add-container" className="add-container">
          <h1>
            Add New Card
            <button id="hide" className="btn btn-small btn-ghost">
              <i className="fas fa-times"></i>
            </button>
          </h1>

          <div className="form-group">
            <label htmlFor="question">Question</label>
            <textarea id="question" placeholder="Enter question..."></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="answer">Answer</label>
            <textarea id="answer" placeholder="Enter Answer..."></textarea>
          </div>

          <button id="add-card" className="btn">
            <i className="fas fa-plus"></i> Add Card
          </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
