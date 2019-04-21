/*global artifacts*/

var ScruplBox = artifacts.require("./ScruplBox.sol");
var ScruplNFT = artifacts.require("./ScruplNFT.sol");

module.exports = async (deployer, network, accounts) => {
  const scruplBox = await ScruplBox.deployed();
  const scruplNFT = await ScruplNFT.deployed();

  await scruplNFT.mint(scruplBox.address, 1);
  await scruplNFT.mint(scruplBox.address, 2);
  await scruplNFT.mint(scruplBox.address, 3);
  await scruplNFT.mint(scruplBox.address, 4);
  await scruplNFT.mint(scruplBox.address, 5);
  await scruplNFT.mint(scruplBox.address, 6);
  await scruplNFT.mint(scruplBox.address, 7);
  await scruplNFT.mint(scruplBox.address, 8);
  await scruplNFT.mint(scruplBox.address, 9);

};
