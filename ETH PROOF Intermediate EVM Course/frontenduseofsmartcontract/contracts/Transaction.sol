// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Transactions {
   
   uint256 transactionCount;

    event Transfer(address from,address reciver,uint256 amount,uint256 timestamp);
    struct TransferStruct {
        address sender;
        address reciver;
        uint256 amount;
        uint256 timestamp;
    }

    TransferStruct[] transactions;

    function addToBlockChain(address payable reciver,uint256 amount)public{
        transactionCount+=1;
        transactions.push(TransferStruct(msg.sender,reciver,amount,block.timestamp));
        emit Transfer(msg.sender,reciver,amount,block.timestamp);
    }

    function getAllTransactions() public view returns(TransferStruct[] memory){
        return transactions;
    }

    function getAllTransactionsCount() public view returns(uint256){
        return transactionCount;
    }

}
