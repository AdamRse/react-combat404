import React from 'react';
import ButtonCapacity from './ButtonCapacity';
import ProgressBar from './ProgressBar';

const PlayerCard = (props) => {

    return (
        <div key={props.player.id} className="col-sm-3 card center" id={`joueur${props.player.id}`}>
            <img src={`img/characters/${props.player.name}-static.gif`} />
            <div className="card-body text-center">
                <h5 className="card-title">{props.player.name}</h5>
                <ProgressBar pv={props.player.pv} pvMax={props.player.pvMax} type={1} />
                <ProgressBar pv={props.player.mana} pvMax={props.player.manaMax} type={0} />

                <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
                <div className="row ">
                    <div>
                        <ButtonCapacity player={props.player} />
                    </div>
                </div >
            </div >
        </div >
    )
}
export default PlayerCard;