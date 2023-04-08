// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;


interface Calculator {
    function getResult() external view returns(uint);
}

contract Test is Calculator{
    function getResult() external pure returns(uint){
        uint a=10;
        uint b=20;
        uint ans=a+b;
        return ans;
    }
}