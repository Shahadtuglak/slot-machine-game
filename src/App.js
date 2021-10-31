import React from 'react';
import './App.css';
import SlotM from './SlotMachine';


function App() {
  
  return (
    <div className="App">

      <h1 className="header">🎰 Welcome to <span className="slotSpan">Slot Machine Game </span>🎰</h1>
      <div className="slotmachine">
        
        <SlotM x = "😊" y = "😊" z = "😁"/>
        <SlotM x = "💖" y = "💖" z = "💖"/>
        <SlotM x = "🍌" y = "🍓" z = "🍉"/>
        <SlotM x = "😊" y = "😊" z = "😊"/>

      </div>

    </div>
  );
}

export default App;
