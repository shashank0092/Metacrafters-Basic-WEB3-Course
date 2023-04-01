// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract Assignment1 {
    uint256 data1;
    uint256 data2;
    address data3;

    function setData1(uint256 _data1) public{
        data1 = _data1;
    }

    function setData2(uint256 _data2) public{
        data2 = _data2;
    }

   function getData1() public view returns(uint256){
        return data1;
    }

    function getData2() public view returns(uint256){
        return data2;
    }

    function addData() public view returns(uint256){
        return data1+data2;
    }

    function setAdress()public{
        data3=msg.sender;
    }

    function getAdress() public view returns(address){
        return data3;
    }

    


    
}