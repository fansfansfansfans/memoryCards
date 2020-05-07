/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About.jsx';
import Navbar from './components/Navbar.jsx';
import AddCards from './components/AddCards.jsx';
import MainContainer from './containers/MainContainer.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={MainContainer} />
            <Route exact path="/about" component={About} />
            <Route exact path="/addCards" component={AddCards} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
