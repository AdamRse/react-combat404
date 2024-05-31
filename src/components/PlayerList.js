import React from 'react';
import PlayerCard from './PlayerCard';


class PlayerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: {
      }
    }
  }
  displayPlayers = () => {
    return Object.keys(this.state.players).map(key => (
      <PlayerCard key={this.state.players[key].id} player={this.state.players[key]} />
    ));
  }
  render() {
    return (
      <div className='row'>
        {this.displayPlayers()}
      </div>
    );
  }

}

export default PlayerList;