pragma solidity ^0.5.7;

import "./ScruplNFT.sol";
import "./ScruplToken.sol";

import "lib/budgetBox/contracts/BudgetBox.sol";

contract ScruplBox is BudgetBox {

  ScruplNFT scruplNFT;
  ScruplToken scruplToken;

  // TEMPORARY
  uint256 tokenId = 1;
  uint256 MIN_INDULGENCE = 1000;

  event SinAbsolved(uint256 _value, uint256 indexed _tokenId);

  constructor(address _scruplNFT, address _scruplToken) public {
    scruplNFT = ScruplNFT(_scruplNFT);
    scruplToken = ScruplToken(_scruplToken);
  }

  function addVote(uint256 _vote) public {
    revert("restricted in scruplbox to those who burn scruples. Use buyIndulgence() instead.");
  }

  function buyIndulgence(uint256 _value, uint256 _vote) public {
    require(_value <= MIN_INDULGENCE, "you need more scruples");
    voteArray.push(_vote);
    if (voteArray.length >= MAX_VOTES) loadVotesToBBoxStorage();
    scruplToken.burnFrom(msg.sender, _value);
    scruplNFT.safeTransferFrom(address(this), msg.sender, tokenId);
    emit SinAbsolved(_value, tokenId);
  }

}
