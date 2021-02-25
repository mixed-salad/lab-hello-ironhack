import React, { Component } from 'react';
import logo from './logo.svg';
import Features from './components/features';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="header-text">
            <h1>Say hello to<br/>ReactJS</h1>
            <p>You will learn a Frontend<br/>framework from scratch, to<br />become an Ninja Developer.
            </p>
          </div>
          <a id="awesome" href="#">Awesome!</a>
        </header>
        <div>
          <Features></Features>
        </div>
      </div>
    );
  }
}

export default App;
