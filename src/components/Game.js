import React from 'react';
import './Game.css';
import Monster from './Monster';
import PlayerList from './PlayerList';
import EndGame from "./EndGame";

const Game = () => {
    return (
      <>
        <EndGame />
        <div className="App">
          <div id='monsterContainer'>
            <Monster />
          </div>
          <div id='playerContainer'>
            <PlayerList />
          </div>
        </div>
      </>
    )
}

export default Game;