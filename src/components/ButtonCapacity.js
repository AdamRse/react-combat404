import React from 'react';
import { useDispatch } from 'react-redux';
import { hitMonster, hitPlayer } from '../features/fight/fightSlice';

const ButtonCapacity = (props) => { 
    const dispatch = useDispatch();//Dispatch permet de changer une variable du state

    function combat(){
        dispatch(//dispatch (useDispatch()) va chercher la fonction du reducer dans le slice, c'est pour ça qu'on l'exporte
            hitMonster(props.player)
        );
        dispatch(
            hitPlayer(props.player)
        );
    }
    return props.player.pv > 0 ? (
        <button type="button" onClick={() => combat()} className="btn btn-success material-tooltip-main ">
            Attaque
            <i className="fas fa-bomb"></i> ({props.player.atk} damages)
        </button>
    ) : null
}

export default ButtonCapacity;