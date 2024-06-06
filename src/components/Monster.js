import React from 'react';
import ProgressBar from './ProgressBar';
import { useSelector } from 'react-redux';


const Monster = () => {
  const monster = useSelector(state => state.fight.monster);

  return (
    <>
      <div className='monster-row'>
        <img src="img/characters/sephiroth-static.gif" alt='monster' />
        <div className='stats-monster'>
          <div className='monster-name'>{monster.name}</div>
          <div className='bars'>
            <ProgressBar pv={monster.pv} pvMax={monster.pvMax} type={1} />
            <ProgressBar pv={monster.mana} pvMax={monster.manaMax} type={0} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Monster;