// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;


contract Funder {
    uint public numOffFunders;

    mapping (uint => address) private funders;

    function transfer() external payable{
        funders[numOffFunders]=msg.sender;

    }

    receive() external payable{}

    function withdraw(uint withdrawAmount) external{
        require(withdrawAmount<= 2000000000000000000,"Can Not Withdraw more than 2 ether");
        payable(msg.sender).transfer(withdrawAmount);
    }


}