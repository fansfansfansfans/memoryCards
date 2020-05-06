/**
 * ************************************
 *
 * @module  MarketsDisplay
 * @author
 * @date
 * @description presentation component that renders n MarketDisplay components
 *
 * ************************************
 */

import React from 'react';
import MarketDisplay from './MarketDisplay.jsx';

const MarketsDisplay = ({marketList, addCard, removeCard}) => {
  const display = [];
  for(let i = 0; i < marketList.length; i++){
    display.push(<MarketDisplay
      newLocation={marketList[i].newLocation}  
      lastMarketId={marketList[i].lastMarketId}
      displayCards={marketList[i].displayCard}
      marketList={marketList}
      addCard={addCard}
      removeCard={removeCard}
      key={`display${i}`}
      />)
  }
  return(
    <div className="displayBox">
      <h4>Markets Display</h4>
        {display}
    </div>
  );
};

export default MarketsDisplay;