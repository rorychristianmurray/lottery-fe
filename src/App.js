import React from 'react';
import './App.css';
import web3 from './web3'
import lottery from "./lottery"

class App extends React.Component {
  state = {
    manager: ''
  }


  async componentDidMount() {
    const manager = await lottery.methods.manager().call()
    this.setState({ manager })
  }

  render() {
        return (
          <div className="App">
            <h2>Lottery Contract</h2>
        <p>Contract managed by {this.state.manager}</p>
          </div>
        );
    }

  }



export default App;
