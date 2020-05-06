import React, { Component } from 'react';

export class CardDisplay extends Component {
  render() {
    return (
      <div id="cards-container" className="cards">
        <div className="card active">
          <div className="inner-card">
            <div className="inner-card-front">
              <p>What is PHP?</p>
            </div>
            <div className="inner-card-back">
              <p>A programming language</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="inner-card">
            <div className="inner-card-front">
              <p>What is PHP?</p>
            </div>
            <div className="inner-card-back">
              <p>A programming language</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardDisplay;
