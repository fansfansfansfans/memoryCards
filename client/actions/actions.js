/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes'

export const addCard = (marketId) => {
  return {
    type: types.ADD_CARD,
    payload: marketId
  }
};

export const addMarket = ()=>{
  console.log(`actionCreator: addMarket`);
  //console.log('location query', document.querySelector('location'))
  return {
    type: types.ADD_MARKET,
  }
}

export const setNewLocation = (event)=>{
  console.log('actionCreator: setNewLocation', event)

  return{
    type: types.SET_NEW_LOCATION,
    payload: event.target.value

  }
}

export const removeCard = (marketId)=>{
  return {
    type: types.REMOVE_CARD,
    payload: marketId
  }
}

// add more action creators