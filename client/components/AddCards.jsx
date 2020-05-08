import React from 'react';

const AddCards = () => {
  function addCard() {
    console.log('hellllloooo card will be added !!!');
    const category = document.querySelector('#categoryInput').value;
    const answer = document.querySelector('#answer').value;
    const question = document.querySelector('#question').value;
    console.log(
      `http:/localhost:8080/api?question=${question}&answer=${answer}&category=${category}`
    );
    const queryData = { question, answer, category, level: 1 };
    console.log('post data =', queryData);
    fetch('/api', {
      method: 'POST',
      // mode: 'no-cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'content-type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(queryData),
    })
      .then(response => response.json())
      .then(data => console.log('response from server =', data));
  }

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
        </form>
        <button id="add-card-button" className="btn" onClick={() => addCard()}>
          Add Card
        </button>
      </div>
    </div>
  );
};

export default AddCards;
