// SPDX-License-Identifier:MIT
pragma solidity >=0.8.2 <0.9.0;

contract Modifires {
    
    address owner;
    modifier onlyOwner {
        require(owner==msg.sender,"THIS IS NOT VALID USER");
        _;
    }
}