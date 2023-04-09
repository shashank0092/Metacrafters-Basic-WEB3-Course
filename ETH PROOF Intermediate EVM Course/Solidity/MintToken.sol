// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyToken {
    string public name;
    string public symbol;
    uint8 public decimals;
    uint256 public totalSupply;
    address public owner;

    mapping (address => uint256) public balanceOf;
  

    event Transfer(address indexed from, address indexed to, uint256 value);
    

    constructor(string memory _name, string memory _symbol, uint8 _decimals, uint256 _totalSupply) {
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        totalSupply = _totalSupply;
        owner = msg.sender;
        balanceOf[msg.sender] = totalSupply;
    }

  

    
 

    function mint(address _to, uint256 _amount) public {
        require(msg.sender == owner, "Only owner can mint new tokens");

        balanceOf[_to] += _amount;
        totalSupply += _amount;

        emit Transfer(address(0), _to, _amount);
    }
}
