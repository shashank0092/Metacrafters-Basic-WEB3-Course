// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract Shukla {

    
    function reciveInEther() public payable returns(uint256){
        return msg.value;
    }   


    function reciveInWei() public payable returns(uint256){
        return msg.value*1 ether;

    }   
    function reciveInGwei() public payable returns(uint256){
        return msg.value*1 gwei;
    }   

   
}