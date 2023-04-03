// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
// when we want to store trasaction historey of any events than we use indexed keayword data stor in data structure topic

contract Index {
    
    event shukla(address indexed owner,uint256 indexed data);

    function data(uint256 _data)public{
        emit shukla(msg.sender, _data);
    }
}

