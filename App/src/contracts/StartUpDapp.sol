// SPDX-License-Identifier: MIT
pragma solidity ^ 0.8.10;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract StartUpDapp is ERC721URIStorage, Ownable {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
  
  //address public owner = msg.sender;
  //uint256 public startupCount = 0;
  //mapping(uint256 => Startup) public startups;
  address public recipient = msg.sender;
  string public tokenURI = "QmZKeVBGojPrnup7qTyPJA1aEzexhnSFBPraamkMhM9NdE";
  constructor() ERC721("MyNFT", "NFTWORKED") {}

  function mintNFT()public onlyOwner returns (uint256) {
    _tokenIds.increment();

    uint256 newItemId = _tokenIds.current();
    _mint(recipient, newItemId);
    _setTokenURI(newItemId, tokenURI);

    return newItemId;
}
 /* struct Startup { // the startup attributes
    address owner; // the owner of the startup
    uint256 startupId; // unique id for each startup
    string startupDescription; // The Description of the Startup
    uint256 startupAmount; //Startup amount requested
    bool isActive; // is the startup active?
  }
  
  event StartupRequested(
    address owner, 
    uint256 startupId, 
    string startupDescription, 
    uint256 startupAmount, 
    bool isActive
    );

  event StartupFunded(
    address owner, 
    uint256 startupId, 
    string startupDescription, 
    uint256 startupAmount, 
    bool isActive
    );

  //1. Owner requests a startup
  function requestFunding(string memory _startupDescription, uint256 _startupAmount) public {
    //Require a valid description
    require(bytes(_startupDescription).length > 0);
    //require a valid startup amount
    require(_startupAmount > 0);
    //increment startup count
    startupCount++;
    //create the startup
    startups[startupCount] = Startup(msg.sender, startupCount, _startupDescription, _startupAmount, false);
    //trigger an evant
    emit StartupRequested(msg.sender, startupCount, _startupDescription, _startupAmount, false);
  }

  //2. Funder accepts startup fund request
  function fundStartup(uint _startupId) public payable {
    //Get the startup
    Startup memory _startup = startups[_startupId];
    //Fetch the owner
    address _owner = _startup.owner;
    //Require the startup has a valid id
    require(_startupId > 0 && _startupId <= startupCount);
    //Require that there is enough ether to fund the startup
    require(msg.value >= _startup.startupAmount);
    //Require that the startup has not been funded already
    require(!_startup.isActive);
    //Require that the funder is not the owner
    require(msg.sender != _owner);
    //Mark as funded and active
    _startup.isActive = true;
    //Update the startup
    startups[_startupId] = _startup;
    //Pay the owner by sending the startup amount requested
    payable(_owner).transfer(msg.value);
    //Trigger an event  
    emit StartupFunded(msg.sender, startupCount, _startup.startupDescription, _startup.startupAmount, true);
  }
  */
    
  
}


