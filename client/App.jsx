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
// import TotalsDisplay from '../components/TotalsDisplay.jsx';
// import MarketsContainer from './MarketsContainer.jsx';

//importing connected component from markets container
// const mapStateToProps = state => {
// // add pertinent state here
//   const {marketList, totalCards} = state.marketsReducer;
//     return {
//     // provide pertinent state here
//       marketList,
//       totalCards
//     }
// } 


class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <div className="outerBox">
          <h1 id="header">Memory Game</h1>
        </div>
      </div>
    )
  }

}

export default connect(null, null)(MainContainer);

/* <TotalsDisplay marketList={this.props.marketList} totalCards={this.props.totalCards}<MarketsContainer /> */