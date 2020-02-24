import React from 'react';
import './App.css';
import web3 from './web3'
import lottery from "./lottery"

class App extends React.Component {
  state = {
    manager: ''
  }


  async componentDidMount() {
    console.log("CDM bef")
    console.log("lottery.options.address : ", lottery.options.address)
    const manager = await lottery.methods.manager().call()
    this.setState({ manager })
    console.log("CDM manager : ", manager)
  }


  render() {
    console.log("state : ", this.state)
    console.log("lottery : ", lottery)


  console.log("web3.version : ", web3.version)
    web3.givenProvider.enable().then(console.log)
        return (
          <div className="App">
            <h2>Lottery Contract</h2>
        <p>Contract managed by {this.state.manager}</p>
          </div>
        );
    }

  }



export default App;
