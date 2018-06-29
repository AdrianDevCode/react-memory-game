import React, { Component } from 'react';
import './App.css';
import Card from "./MemoryCard.js";

let generateDeck = () => {
  let symbols = ['∆','ß','£','§','•','$','+','ø'];
  let deck = [];

  for(let i = 0; i < 16; i++){
    deck.push({
        isFlipped: false,
        symbol: symbols[i%8]
    });
  }
  shuffle(deck);
  return deck;
}

let shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      deck: generateDeck(),
      pickedCards: []
    }
  }
  pickCard(cardIndex) {
    if(this.state.deck[cardIndex].isFlipped){return};
    let cardToFlip = {...this.state.deck[cardIndex]};
  }
  
  render() {
    let cardsJSX = this.state.deck.map((card, index) => {
      return <Card symbol={card.symbol} isFlipped={card.isFlipped} key={index}/>
    });
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Memory Game</h1>
          <h4 className="App-subtitle">Match Cards to Win</h4>
          <div>{cardsJSX.slice(0,4)}</div>
          <div>{cardsJSX.slice(4,8)}</div>
          <div>{cardsJSX.slice(8,12)}</div>
          <div>{cardsJSX.slice(12,16)}</div>
        </header>
      </div>
    );
  }
}

export default App;
