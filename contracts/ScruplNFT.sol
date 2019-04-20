pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Mintable.sol";

contract ScruplNFT is ERC721Full, ERC721Mintable {

  constructor(string memory _name, string memory _symbol)
    ERC721Full(_name, _symbol)
    public
  {}

}
