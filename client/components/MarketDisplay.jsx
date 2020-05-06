/**
 * ************************************
 *
 * @module  MarketDisplay
 * @author
 * @date
 * @description presentation component that renders a single box for each market
 *
 * ************************************
 */

import React from 'react';

const MarketDisplay = ({newLocation, lastMarketId, displayCards, marketList, addCard, removeCard}) => (
  <div className="marketBox">
    <label>Market ID: </label><span>{lastMarketId}</span>
    <br/>
    <label>Location: </label><span>{newLocation}</span>
    <br/>
    <label>Cards: </label><span>{displayCards}</span>
    <br/>
    <label>% of total: </label><span>{marketList.length}</span>
    <br/>
    <span><button onClick={()=>addCard(lastMarketId)}>Add Card</button></span>
    <span><button onClick={()=>removeCard(lastMarketId)}>Remove Card</button></span>
  </div>
);

export default MarketDisplay;
