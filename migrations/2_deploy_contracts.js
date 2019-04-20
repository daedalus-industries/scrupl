var Scrupl = artifacts.require("./ScruplBox.sol");

module.exports = function(deployer) {
  deployer.deploy(ScruplBox);
};
