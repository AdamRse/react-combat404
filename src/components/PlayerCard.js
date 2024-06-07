import React, { useEffect, useState } from 'react';
import ButtonCapacity from './ButtonCapacity';
import ProgressBar from './ProgressBar';

const PlayerCard = (props) => {
    const [isHit, setIsHit] = useState(false);
    const [hasBeenHit, setHasBeenHit] = useState(false);

    useEffect(() => {
        if (isHit) {
            const timer = setTimeout(() => setIsHit(false), 500);//Temps de l'anim css
            return () => clearTimeout(timer);
        }
    }, [isHit]);

    useEffect(() => {//Vérification pour que l'anim ne se déclenche pas au début
        if (hasBeenHit) {
            setIsHit(true);
        } else if (props.player.pv < props.player.pvMax) {
            setHasBeenHit(true);
        }
    }, [props.player.pv, hasBeenHit, props.player.pvMax]);

    function returnDeadClass() {
        return props.player.pv > 0 ? null : "isDead";
    }

    return (
        <div className={`player-row p-${props.player.name} ${returnDeadClass()}`}>
            <div className='front'>
                <img src={`img/characters/${props.player.name}-static.gif`} alt='player' className={`avatar ${isHit ? 'hit' : ''}`} />
                <div className='btAction'>
                    <ButtonCapacity player={props.player} />
                </div>
            </div>
            <div style={{clear: "both"}}></div>
            <div className={`stats-player`}>
                <img src={`img/characters/${props.player.name}-static.gif`} alt='player' className='bgStats' />
                <div className='bars'>
                    <ProgressBar pv={props.player.pv} pvMax={props.player.pvMax} type={1} />
                    <ProgressBar pv={props.player.mana} pvMax={props.player.manaMax} type={0} />
                </div>
                <div className='player-name'>{props.player.name}</div>
            </div>
        </div>
    );
}

export default PlayerCard;
