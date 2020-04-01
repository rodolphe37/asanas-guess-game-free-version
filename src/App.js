import React from 'react';
import './App.css';
import AsanasGuess from './AsanasGuess'
import HeaderGuess from './HeaderGuess';
import Timer from './Timer/Timer-test';

function App() {
  return (
    <div className="App-guess">
      <HeaderGuess />
      <AsanasGuess />
      <footer className="time-guess"><Timer /></footer>
    </div>
  );
}

export default App;
