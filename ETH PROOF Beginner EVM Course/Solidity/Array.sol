// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract Array {
    uint[] data=[10,20,30];
    uint[5] data2=[10,20,30,40,50];

    function update() public{
        data.push(200);
        data.pop();

        // data2.push();

        uint256 value=data[3];

        delete data2[3];

        uint[] memory a=new uint[](5);
    }

}