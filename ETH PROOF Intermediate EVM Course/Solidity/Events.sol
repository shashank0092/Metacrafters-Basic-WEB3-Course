// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Events {

    event shukla(address data,string message);
    event shukla2();

    function data() public returns(uint256){
        emit shukla(msg.sender, "THIS IS A SHUKLA BOI");
        return 5;
    }

    function data2() public {
        emit shukla2();
        
    }
}