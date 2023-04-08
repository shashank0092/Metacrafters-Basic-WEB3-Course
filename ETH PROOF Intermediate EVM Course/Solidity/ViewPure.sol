// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;


contract ViewPure {

    uint public data=10;

    function addView(uint y) public view returns(uint){
        return data+y;
    }

    function addPure(uint x,uint y) public pure returns(uint){
        return x+y;
    }
}