var Scruples = artifacts.require("./Scruples.sol");

module.exports = async (deployer, network, accounts) => {
  const scruple = await Scruples.deployed();

  await scruple.mint(accounts[1], 1);
  await scruple.mint(accounts[2], 2);
  await scruple.mint(accounts[3], 3);
  await scruple.mint(accounts[4], 4);
  await scruple.mint(accounts[5], 5);
  await scruple.mint(accounts[6], 6);

};
