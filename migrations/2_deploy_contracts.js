/*global artifacts*/

const ScruplBox = artifacts.require("./ScruplBox.sol");
const ScruplNFT = artifacts.require("./ScruplNFT.sol");
const ScruplToken = artifacts.require("./ScruplToken.sol");

module.exports = async (deployer) => {
  await deployer.deploy(ScruplNFT, "Scrupl (NFT)", "SCRPLNFT");
  await deployer.deploy(ScruplToken, "Scrupl (Token)", "SCRPLTKN", 18);
  await deployer.deploy(ScruplBox, ScruplNFT.address, ScruplToken.address);
};
