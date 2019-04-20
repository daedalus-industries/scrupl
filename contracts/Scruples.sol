pragma solidity ^0.4.24;
pragma experimental "v0.5.0";

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Mintable.sol";

contract Scruples is ERC721Full, ERC721Mintable {

  // solhint-disable-next-line no-empty-blocks
    constructor() public ERC721Full("Scruple moral NFTs", "SRCRUPL") {
    }

    

}
