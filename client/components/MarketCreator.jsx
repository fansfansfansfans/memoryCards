/**
 * ************************************
 *
 * @module  MarketCreator
 * @author
 * @date
 * @description presentation component that takes user input for new market creation
 *
 * ************************************
 */

import React from 'react';

function MarketCreator({ value, setNewLocation, addMarket }) {
  // how do we create the circuit between the store and an input field?
  // how do we update the store from a presentation component?
  return (
    <div>
      <label>Create New Market</label>
      <p>
        <label htmlFor="location">Location: </label>
        <input
          type="text"
          id="location"
          onChange={event => setNewLocation(event)}
          value={value}
        />
        <button onClick={() => addMarket()}>Add Market</button>
      </p>
    </div>
  );
}

export default MarketCreator;
