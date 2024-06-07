import React, { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';
import { useSelector } from 'react-redux';

const Monster = () => {
  const monster = useSelector(state => state.fight.monster);
  const [isHit, setIsHit] = useState(false);
  const [hasBeenHit, setHasBeenHit] = useState(false);

  useEffect(() => {
    if (isHit) {
      const timer = setTimeout(() => setIsHit(false), 500); // Durée de l'anim css
      return () => clearTimeout(timer);
    }
  }, [isHit]);

  useEffect(() => {//Vérification
    if (hasBeenHit) {
      setIsHit(true);
    } else if (monster.pv < monster.pvMax) {
      setHasBeenHit(true);
    }
  }, [monster.pv, hasBeenHit, monster.pvMax]);

  return (
    <>
      <div className='monster-row'>
        <img src="img/characters/sephiroth-static-f.gif" alt='monster' className={`avatar ${isHit ? 'hit' : ''}`} />
        <div style={{clear: 'both'}}></div>
        <div className='stats-monster'>
          <img src="img/characters/sephiroth-static-f.gif" alt='monster' className='bgStats' />
          <div className='monster-name'>{monster.name}</div>
          <div className='bars'>
            <ProgressBar pv={monster.pv} pvMax={monster.pvMax} type={1} />
            <ProgressBar pv={monster.mana} pvMax={monster.manaMax} type={0} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Monster;
