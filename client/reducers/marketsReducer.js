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

import * as types from '../constants/actionTypes';

const initialState = {
  totalMarkets: 0,
  totalCards: 0,
  marketList: [],
  lastMarketId: 10000,
  newLocation: '',
};

const marketsReducer = (state = initialState, action) => {
  let marketList,
    lastMarketId,
    newLocation,
    totalMarkets,
    totalCards,
    marketListClone;

  console.log(`marketsReducer: payload = ${action.payload}`);
  switch (action.type) {
    case types.ADD_MARKET:
      // increment lastMarketId and totalMarkets counters
      lastMarketId = state.lastMarketId + 1;
      totalMarkets = state.totalMarkets + 1;
      newLocation = state.newLocation;
      totalCards = state.totalCards;
      console.log(lastMarketId, totalMarkets, newLocation, totalCards);

      // create the new market object from provided data
      const newMarket = {
        // what goes in here?
        //total cards, location, new market ID
        displayCard: 0,
        newLocation: newLocation,
        lastMarketId: lastMarketId,
      };

      // push the new market onto a copy of the market list
      marketList = state.marketList.slice();
      marketList.push(newMarket);
      console.log('marketList: ', state.marketList);
      // return updated state
      return {
        ...state,
        marketList,
        lastMarketId,
        totalMarkets,
        newLocation: '',
      };

    //cases are the subscribers
    case types.SET_NEW_LOCATION:
      //reassign states location as the user input
      newLocation = action.payload;
      return {
        ...state,
        newLocation,
      };

    case types.ADD_CARD:
      //increment total cards by one
      marketListClone = JSON.parse(JSON.stringify(state.marketList));
      totalCards = state.totalCards;
      for (let i = 0; i < marketListClone.length; i++) {
        if (marketListClone[i].lastMarketId === Number(action.payload)) {
          marketListClone[i].displayCard += 1;
          totalCards += 1;
        }
      }

      //we also want to increment the specific Market ID's cards
      return {
        ...state,
        totalCards,
        marketList: marketListClone,
      };

    case types.REMOVE_CARD:
      //decrement total cards by one
      marketListClone = JSON.parse(JSON.stringify(state.marketList));
      totalCards = state.totalCards;
      for (let i = 0; i < marketListClone.length; i++) {
        if (marketListClone[i].lastMarketId === Number(action.payload)) {
          if (marketListClone[i].displayCard != 0) {
            marketListClone[i].displayCard -= 1;
            totalCards -= 1;
          }
        }
      }
      return {
        ...state,
        totalCards,
        marketList: marketListClone,
      };

    default:
      return state;
  }
};

export default marketsReducer;
