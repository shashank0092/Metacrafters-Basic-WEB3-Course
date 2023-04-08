// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;


contract Error {

 
    function sendEther(address payable recipient) payable public{
        require(msg.value/1 ether>=5,"Inssufficent Amount");
        recipient.transfer(5 ether);
    }

    function Revert(uint i) public payable  returns(uint) {

        if(i>0){
            i=10;
            return i;
        }

        else{
            i=100;
            revert("THIS IS NOT CORREECT VALUE");
        }

    }

    function Assert(address payable recipient) public payable{
        assert(msg.value/1 ether>=5);
        recipient.transfer(5 ether);
    }
}