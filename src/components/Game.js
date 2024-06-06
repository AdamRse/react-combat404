import React from 'react';
import './Game.css';
import Monster from './Monster';
import PlayerList from './PlayerList';
import { useSelector } from 'react-redux';

const Game = () => {
  const gameStatus = useSelector(state => state.fight.gameStatus);

  function messageGameStatut(){
    switch (gameStatus) {
      case 0:
        return <>Défaite</>;
      case 2:
        return <>Victoire !!!</>;
      default:
        return null;
    }
  }
    return (
      <div className="App">
        <div id='monsterContainer'>
          <Monster />
        </div>
        <div>
          <PlayerList />
        </div>
        <div className='statusGame'>{messageGameStatut()}</div>
      </div>
    )
}

export default Game;