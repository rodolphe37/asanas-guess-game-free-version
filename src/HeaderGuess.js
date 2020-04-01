import React from 'react';

const HeaderGuess = () => {
  return (
    <div className="header-guess">
    <img className="back-board" src={require('./ressources/lotus-background.png')} alt="" />
    <h1>Asanas Guessing Game</h1>
    <p>By Rodolphe Augusto</p>
    {/*<img className="lotus-bottom" src={require('./ressources/pink-lotus-flower.png')} alt="" />*/}
    </div>
  )
}

export default HeaderGuess;
