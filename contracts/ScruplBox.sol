pragma solidity ^0.5.7;

import "lib/budgetBox/contracts/BudgetBox.sol";

contract ScruplBox is BudgetBox {

  event SinAbsolved(uint256 value, uint256 indexed tokenId);

  uint256 MIN_INDULGENCE;
  address ScrupleToken = 0xdeadbeef;
  address ScrupleNFT = 0xf00;
  // TODO: define ScruplToken contract here

  function addVote(uint256 vote) public {
    revert("restricted in scruplbox to those who burn scruples. Use buyIndulgence() instead.");
  }

  function buyIndulgence(uint256 _value, uint256 vote) public {
    burn = _value;
    require(burn <= MIN_INDULGENCE, "you need more scruples");

    voteArray.push(vote);
    if (voteArray.length >= MAX_VOTES) loadVotesToBBoxStorage();

    // calls _burnFrom in the ERC20 contract
    ScruplToken._burnFrom(msg.sender, burn);

    // Send the NFT corresponding to the project that was voted for.
    ScrupleNFT.safeTransferFrom(this, msg.sender, //tokenId);

    emit SinAbsolved(burn, tokenId);


  }

}
