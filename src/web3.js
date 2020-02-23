import Web3 from 'web3';

// jack provider from injected metamask instance
const w3 = new Web3(window.web3.currentProvider)

export default w3;