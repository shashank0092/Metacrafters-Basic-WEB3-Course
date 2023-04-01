// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract Mapping {
    mapping (address => uint) public balances;


    function examples() external{
        balances[msg.sender]=123;

        uint bal=balances[msg.sender];
        uint bal2=balances[address(1)];

        balances[msg.sender]+=456;
        delete balances[msg.sender];
    }
}