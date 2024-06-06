import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetState } from '../features/fight/fightSlice';

const EndGame = () => {
  const gameStatus = useSelector(state => state.fight.gameStatus);
  const dispatch = useDispatch();

  function razState() {
    dispatch(resetState());
  }

  function messageGameStatut() {
    let content = null;
    if (gameStatus === 0) {
      content = (
        <div className='statusGame' onClick={razState}>
          <div>Défaite</div>
        </div>
      );
    } else if (gameStatus === 2) {
      content = (
        <div className='statusGame' onClick={razState}>
          <div>Victoire !!!</div>
        </div>
      );
    }
    return content;
  }

  return (
    <>
      {messageGameStatut()}
    </>
  );
}

export default EndGame;
