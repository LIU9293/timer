import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Router from './route';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={browserHistory} />
      </div>
    );
  }
}

export default App;
