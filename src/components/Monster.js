import React from 'react';
import ProgressBar from './ProgressBar';
import { useSelector } from 'react-redux';


const Monster = () => {
  const monster = useSelector(state => state.fight.monster);

  return (
    <>
      <div id='monsterContainer'>
        <img className="img-fluid" src="img/sephiroth.gif" alt='monster' />
        <span className='nameMonster'>{monster.name}</span>

        <ProgressBar pv={monster.pv} pvMax={monster.pvMax} type={1} bgType='bg-danger' faType='fa-heart' barName=' : pv' />
      </div>
    </>
  )
}

export default Monster;