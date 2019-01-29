import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-content">
        <div className="app-child"> Hello World
        </div>
        <button type="button" className="btn btn-danger">Danger</button>

        <button type="button" className="btn btn-dark">Start</button>

      </div>
    );
  }
}

export default App;
