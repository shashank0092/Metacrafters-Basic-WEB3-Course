// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Create the contract for your new token
contract MyToken {
    // Set the token name and symbol
    string public name = "My Token";
    string public symbol = "MYT";
    
    // Set the number of decimals for the token
    uint8 public decimals = 18;
    
    // Set the total supply of the token
    uint256 public totalSupply = 1000000 * 10**uint256(decimals);
    
    // Create a mapping of account addresses to their token balances
    mapping(address => uint256) public balanceOf;
    
    // Create the constructor function to mint the tokens to your wallet
    constructor() {
        balanceOf[msg.sender] = totalSupply;
    }
}