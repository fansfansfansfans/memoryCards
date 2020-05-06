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
import TotalsDisplay from '../components/TotalsDisplay.jsx';
import MarketsContainer from './MarketsContainer.jsx';

//importing connected component from markets container
const mapStateToProps = state => {
// add pertinent state here
  const {marketList, totalCards} = state.marketsReducer;
    return {
    // provide pertinent state here
      marketList,
      totalCards
    }
} 


class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
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

    <div id="cards-container" className="cards">
      <div className="card active">
        <div className="inner-card">
          <div className="inner-card-front">
            <p>
              What is PHP?
            </p>
          </div>
          <div className="inner-card-back">
            <p>
              A programming language
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="inner-card">
          <div className="inner-card-front">
            <p>
              What is PHP?
            </p>
          </div>
          <div className="inner-card-back">
            <p>
              A programming language
            </p>
          </div>
        </div>
      </div> 
    </div>

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
        <label for="question">Question</label>
        <textarea id="question" placeholder="Enter question..."></textarea>
      </div>

      <div className="form-group">
        <label for="answer">Answer</label>
        <textarea id="answer" placeholder="Enter Answer..."></textarea>
      </div>

      <button id="add-card" className="btn">
        <i className="fas fa-plus"></i> Add Card
      </button>
    </div>
    </div>

    )
  }

}

export default connect(mapStateToProps, null)(MainContainer);

      // <div className="container">
      //   <div className="outerBox">
      //     <h1 id="header">MegaMarket Loyalty Cards</h1>
      //     <TotalsDisplay marketList={this.props.marketList} totalCards={this.props.totalCards} />
      //     <MarketsContainer />
      //   </div>
      // </div>