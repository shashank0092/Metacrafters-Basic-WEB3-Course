// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;


contract Message {

    function Value() public payable returns (uint256) {
        return msg.value;
    }

    function Sender() public view returns(address){
        return msg.sender;
    }

    
    function Gasleft() public returns(uint256){
        
    }
}