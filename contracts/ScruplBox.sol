pragma solidity ^0.5.2;

import "lib/budgetBox/contracts/BudgetBox.sol";

contract ScruplBox {

  BudgetBox budgetBox;

  constructor() public {
    budgetBox = new BudgetBox();
  }

}
