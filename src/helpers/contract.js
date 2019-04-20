import { TrufflepigLoader } from '@colony/colony-js-contract-loader-http';
import truffleContract from 'truffle-contract';
import Web3 from 'web3';

export const getInstance = async contractName => {

  const web3 = new Web3('http://localhost:8545');
  const loader = new TrufflepigLoader();
  const { abi, address } = await loader.load({ contractName });
  const contract = truffleContract({ abi });
  contract.setProvider(web3.currentProvider);
  return contract.at(address);

}
