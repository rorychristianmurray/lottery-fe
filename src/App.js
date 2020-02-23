import React from 'react';
import './App.css';
import web3 from './web3'

class App extends React.Component {
  render() {
    
console.log("web3.version : ", web3.version)
web3.givenProvider.enable().then(console.log)


    return (
      <div className="App">
        <div>App incoming</div>
      </div>
    );
  }


}

export default App;
