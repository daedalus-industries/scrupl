import { TrufflepigLoader } from '@colony/colony-js-contract-loader-http';
import truffleContract from 'truffle-contract';
import Web3 from 'web3';

const web3 = new Web3('http://localhost:8545');
const loader = new TrufflepigLoader();

export const getAccounts = async () => {
  return Object.entries(await loader.getAccounts());
}

export const getInstance = async contractName => {
  const accounts = await getAccounts();
  const { abi, address } = await loader.load({ contractName });
  const contract = truffleContract({ abi });
  contract.setProvider(web3.currentProvider);
  contract.defaults({ from: await accounts[0][0] });
  return contract.at(address);
}
