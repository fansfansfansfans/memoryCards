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
        <h1> Memory Cards </h1>

        <CardDisplay
          data={cardsData[0]}
          showAnswerFlag={showAnswerFlag}
          // eslint-disable-next-line react/destructuring-assignment
          showAnswer={this.props.showAnswer}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
