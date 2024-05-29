import React from 'react';
import ButtonCapacity from './ButtonCapacity';
import ProgressBar from './ProgressBar';



class PlayerCard extends React.Component {
   

    render() {
        return (
            <div key={this.props.player.id} className="col-sm-3 card center" id={`joueur${this.props.player.id}`}>

                <div className="card-body text-center">
                    <h5 className="card-title">{this.props.player.name}</h5>
                    <ProgressBar pv={this.props.player.pv} pvMax={this.props.player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
                    <ProgressBar pv={this.props.player.mana} pvMax={this.props.player.manaMax} faType='fa-fire-alt' barName=' : mana ' />

                    <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
                    <div className="row ">
                        <div >
                            <ButtonCapacity player={this.props.player} />
                            <ButtonCapacity player={this.props.player} />
                            <ButtonCapacity player={this.props.player} />
                            <ButtonCapacity player={this.props.player} />

                        </div>
                    </div >
                </div >

            </div >
        )
    }
}


export default PlayerCard;