import React from 'react';
import PlayerCard from './PlayerCard';


class PlayerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: {
        1: { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
        2: { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
        3: { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
        4: { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 }
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