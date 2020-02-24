import React from 'react';
import './App.css';
import web3 from './web3'
import lottery from "./lottery"

class App extends React.Component {
  state = {
    manager: '',
    players: [],
    balance: ''
  }


  async componentDidMount() {
    const manager = await lottery.methods.manager().call();

    const players = await lottery.methods.getPlayers().call()

    const balance = await web3.eth.getBalance(lottery.options.address)


    this.setState({ manager, players, balance })
  }

  render() {
        return (
          <div className="App">
            <h2>Lottery Contract</h2>
          <p>Contract managed by {this.state.manager}</p>
        <p>There are currently {this.state.players.length} players entered competing to win {web3.utils.fromWei(this.state.balance, 'ether')} ether!</p>
          </div>
        );
    }

  }



export default App;
