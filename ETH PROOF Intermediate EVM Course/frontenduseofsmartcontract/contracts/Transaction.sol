// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Transactions {
    
    mapping (uint => address) public transactionAddresses;
    mapping (uint => uint) public transactionAmounts;
    uint public transactionCount;
    
    function transfer(address payable recipient) public payable {


        
        recipient.transfer(msg.value);
        transactionAddresses[transactionCount] = recipient;
        transactionAmounts[transactionCount] = msg.value;
        transactionCount++;
    }
    
    function getTransaction(uint index) public view returns (address, uint) {
        require(index < transactionCount, "Invalid transaction index");
        return (transactionAddresses[index], transactionAmounts[index]);
    }
    
    function getTransactionCount() public view returns (uint) {
        return transactionCount;
    }
}
