import React from 'react';

const AddCards = () => {
  return (
    <div className="addCardContainer">
      <div className="addCardPanel">
        <form id="inputForm">
          <h1>Adding Memory Cards</h1>
          <div className="form-group">
            <label htmlFor="question">Question</label>
            <textarea
              id="question"
              rows="2"
              cols="5"
              placeholder="Enter question..."
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="answer">Answer</label>
            <textarea
              id="answer"
              rows="10"
              cols="15"
              placeholder="Enter Answer..."
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="categoryInput">Category</label>
            <select id="categoryInput" className="form-control">
              <option value="mongo">Mongo</option>
              <option value="sql">Sql</option>
              <option value="express">Express</option>
              <option value="security">Security</option>
              <option value="testing">Testing</option>
              <option value="buildTools">Build Tools</option>
            </select>
          </div>

          <button id="add-card-button" className="btn">
            Add Card
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCards;
