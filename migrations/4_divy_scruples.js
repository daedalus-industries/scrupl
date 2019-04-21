/*global artifacts*/

var ScruplToken = artifacts.require("./ScruplToken.sol");

module.exports = async (deployer, network, accounts) => {
  const scruplToken = await ScruplToken.deployed();

  await scruplToken.mint(accounts[0], "100000000000000000000");
  await scruplToken.mint(accounts[1], "100000000000000000000");
  await scruplToken.mint(accounts[2], "100000000000000000000");
  await scruplToken.mint(accounts[3], "100000000000000000000");
  await scruplToken.mint(accounts[4], "100000000000000000000");
  await scruplToken.mint(accounts[5], "100000000000000000000");
  await scruplToken.mint(accounts[6], "100000000000000000000");
  await scruplToken.mint(accounts[7], "100000000000000000000");
  await scruplToken.mint(accounts[8], "100000000000000000000");
  await scruplToken.mint(accounts[9], "100000000000000000000");

};
