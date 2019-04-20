/*global artifacts*/

var ScruplBox = artifacts.require("./ScruplBox.sol");
var ScruplNFT = artifacts.require("./ScruplNFT.sol");
var ScruplToken = artifacts.require("./ScruplToken.sol");

module.exports = function(deployer) {
  deployer.deploy(ScruplBox);
  deployer.deploy(ScruplNFT);
  deployer.deploy(ScruplToken);
};
