/*global artifacts*/

var ScruplToken = artifacts.require("./ScruplToken.sol");

module.exports = async (deployer, network, accounts) => {
  const scruple = await ScruplToken.deployed();

  await scruple.mint(accounts[1], 500000000000000);

};
