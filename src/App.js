import React from 'react';
import './App.css';
import w3 from './web3'

class App extends React.Component {
  render() {
    
console.log("web3.version : ", w3.version)
// console.log("window.web3.currentProvider : ", window.web3.currentProvider)
w3.eth.getAccounts().then(console.log);
    return (
      <div className="App">
        <div>App incoming</div>
      </div>
    );
  }


}

export default App;
