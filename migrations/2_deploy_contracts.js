var ScruplBox = artifacts.require("./ScruplBox.sol");
var Scruples = artifacts.require("./Scruples.sol");

module.exports = function(deployer) {
  deployer.deploy(ScruplBox);
  deployer.deploy(Scruples);
};
