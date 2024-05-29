import React from 'react';
import './Game.css';
import Monster from './Monster';
import PlayerList from './PlayerList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Monster />
        <br></br>
        <section className="container-fluid">
          <PlayerList />
        </section >
      </div>
    )
  }
}

export default App;