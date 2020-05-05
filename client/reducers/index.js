/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';

// import all reducers here
import marketsReducer from './marketsReducer';


// combine reducers, these will be properties in state object
const reducers = combineReducers({
  // if we had other reducers, they would go here
  marketsReducer,
});

// make the combined reducers available for import
export default reducers;

