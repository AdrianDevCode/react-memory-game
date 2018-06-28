import React, { Component } from 'react';
import './App.css';
import Card from "./MemoryCard.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Memory Game</h1>
          <h4 className="App-subtitle">Match Cards to Win</h4>
          <div><Card /><Card /><Card /><Card /></div>
          <div><Card /><Card /><Card /><Card /></div>
          <div><Card /><Card /><Card /><Card /></div>
          <div><Card /><Card /><Card /><Card /></div>
        </header>
      </div>
    );
  }
}

export default App;
