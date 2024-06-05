import React from 'react';
import './Game.css';
import Monster from './Monster';
import PlayerList from './PlayerList';

const Game = () => {
    return (
      <div className="App">
        <Monster />
        <br/>
        <section className="container-fluid">
          <PlayerList />
        </section >
      </div>
    )
}

export default Game;