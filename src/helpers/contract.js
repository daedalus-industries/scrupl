import { TrufflepigLoader } from '@colony/colony-js-contract-loader-http';
import truffleContract from 'truffle-contract';
import Web3 from 'web3';

const web3 = new Web3('http://localhost:8545');
const loader = new TrufflepigLoader();

export const getInstance = async contractName => {

  const { abi, address } = await loader.load({ contractName });
  const contract = truffleContract({ abi });
  contract.setProvider(web3.currentProvider);
  contract.defaults({ from: '0x7014af72effc1524885b09115d3297d07d974dd1' });
  return contract.at(address);

}
