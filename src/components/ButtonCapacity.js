import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hitMonster, hitPlayer, manageActionFree } from '../features/fight/fightSlice';

const ButtonCapacity = (props) => { 
    const dispatch = useDispatch();//Dispatch permet de changer une variable du state
    const actionFree = useSelector(state => state.fight.actionFree);//Férifie si une action est en cours

    function combat(){
        if(actionFree){
            dispatch(
                manageActionFree(false)
            );
            dispatch(//dispatch (useDispatch()) va chercher la fonction du reducer dans le slice, c'est pour ça qu'on l'exporte
                hitMonster(props.player)
            );
            setTimeout(
                () => {
                    dispatch(
                        hitPlayer(props.player)
                    );
                    dispatch(
                        manageActionFree(true)
                    );
                }
            ,1000)
        }
        
    }
    return props.player.pv > 0 ? (
        <button type="button" onClick={() => combat()} className="btnAction">
            Attaque
            <br/>
            ({props.player.atk} damages)
        </button>
    ) : null
}

export default ButtonCapacity;