import React from 'react';
import PlayerCard from './PlayerCard';
import { useSelector } from 'react-redux';


const PlayerList = () => {
  const players = useSelector(state => state.fight.players);

  return (
    <div className='row'>
      {
        players.map((player, k) => {
          return <PlayerCard player={{...player, id:k}} />
        })
      }
    </div>
  );
}

export default PlayerList;