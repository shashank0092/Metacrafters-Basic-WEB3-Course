// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;


contract Error {
    function Require(uint256 value,address payable reciver) public payable {
        require(msg.sender.balance<value,"Inssuficent balance");
        reciver.transfer(value);
        
    }

    function Revert() public pure {
        revert();
    }

    function Assert(uint256 i) public pure returns(uint256){
        assert(i==10);
        return i;

    }
}