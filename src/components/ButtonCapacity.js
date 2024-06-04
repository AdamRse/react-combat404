import React from 'react';
import { useDispatch } from 'react-redux';
import { hitMonster } from '../features/fight/fightSlice';

const ButtonCapacity = (props) => { 
    const dispatch = useDispatch();

    function combat(){
        dispatch(//dispatch (useDispatch()) va chercher la fonction du reducer dans le slice, c'est pour ça qu'on l'exporte
            hitMonster(props.player)
        );
    }
    return (
        <button type="button" onClick={() => combat()} className="btn btn-success material-tooltip-main ">
            Attaque
            <i className="fas fa-bomb"></i> ({props.player.atk} damages)
        </button>
    )
}

export default ButtonCapacity;