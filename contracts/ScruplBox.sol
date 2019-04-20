pragma solidity ^0.5.7;

import "lib/budgetBox/contracts/BudgetBox.sol";

contract ScruplBox is BudgetBox {

  function addVote(uint256 vote) public {
    revert("restricted in scruplbox to those who burn scruples");
  }

  function indulgence(uint256 amount, uint256 vote) payable public {
    voteArray.push(vote);
    if (voteArray.length >= MAX_VOTES) loadVotesToBBoxStorage();
  }

}
