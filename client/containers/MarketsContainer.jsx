/**
 * ************************************
 *
 * @module  MarketsContainer
 * @author
 * @date
 * @description stateful component that renders MarketCreator and MarketDisplay
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import { addCard, removeCard, addMarket, setNewLocation } from '../actions/actions';
// import child components...
import MarketCreator from '../components/MarketCreator.jsx'
import MarketsDisplay from '../components/MarketsDisplay.jsx'

function mapStateToProps(state){
  const {marketList, lastMarketId, newLocation, totalCards} = state.marketsReducer;
  return {
  // provide pertinent state here
    marketList,
    lastMarketId,
    newLocation,
    totalCards
  }
};

function mapDispatchToProps (dispatch){
  //return object of functions that will be merged to props object 
  return{
    // create functions that will dispatch action creators
    addCard:    (marketId)=>dispatch(addCard(marketId)),
    removeCard: (marketId)=>dispatch(removeCard(marketId)),
    addMarket:       ()=>dispatch(addMarket()),
    setNewLocation: (event)=>dispatch(setNewLocation(event))
    
  }
};

class MarketsContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = props;
  //   this.handleClick = this.handleClick.bind(this);
  // }

  render() {
    
    return(
      <div className="innerbox">
        <MarketCreator 
          addMarket={this.props.addMarket} 
          setNewLocation={this.props.setNewLocation} 
          value={this.props.newLocation}
        />
        <MarketsDisplay 
          marketList={this.props.marketList}
          addCard={this.props.addCard}
          removeCard={this.props.removeCard}
        />
      </div>
    );
  }
}


//connect connects our (container) component to the redux store 
export default connect(mapStateToProps, mapDispatchToProps)(MarketsContainer);
