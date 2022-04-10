// SPDX-License-Identifier: MIT
pragma solidity ^ 0.8.10;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract StartUpDapp is ERC721URIStorage, Ownable {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
  
    uint256 public mintCount = 0;
    address public recipient = msg.sender;
    string public tokenURI = "QmZKeVBGojPrnup7qTyPJA1aEzexhnSFBPraamkMhM9NdE";
    mapping(uint256 => Mint) public minting;

  constructor() ERC721("MyNFT", "NFTWORKED") {}


  struct Mint {
    address recipient;
    string tokenURI; 
    bool isActive; 
  }

  function mintNFT()public onlyOwner returns (uint256) {
    _tokenIds.increment();
    mintCount++;
    uint256 newItemId = _tokenIds.current();
    _mint(recipient, newItemId);
    _setTokenURI(newItemId, tokenURI);
    minting[mintCount] = Mint(msg.sender, tokenURI, true);

    return newItemId;
}
 
  
}


