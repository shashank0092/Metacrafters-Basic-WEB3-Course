// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Functions {
    uint256 public data=5;

    function PureFunction(uint256 i,uint256 j) public pure returns(uint256){
        return i+j;
    }

    function ViewFunction() public view returns(uint256){
        return data;

    }
}