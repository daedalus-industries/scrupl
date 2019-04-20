pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";

contract ScruplToken is ERC20Mintable {

  function indulgence(uint256 value) public {
    _burn(msg.sender, value);
  }

}
