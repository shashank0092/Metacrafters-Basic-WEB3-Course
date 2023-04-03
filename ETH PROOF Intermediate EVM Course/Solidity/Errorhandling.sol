// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;


contract Error {
    function Require(uint256 i) public pure returns(uint256) {
        require(i>10,"I IS LESS THAN 10");
        return i;
    }

    function Revert() public pure {
        revert();
    }

    function Assert(uint256 i) public pure returns(uint256){
        assert(i==10);
        return i;

    }
}