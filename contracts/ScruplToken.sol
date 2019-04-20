pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";

contract ScruplToken is ERC20Detailed, ERC20Mintable {

  constructor (string memory _name, string memory _symbol, uint8 _decimals)
    ERC20Detailed(_name, _symbol, _decimals)
    public
  {}

  function indulgence(uint256 _value) public {
    _burn(msg.sender, _value);
  }

}
