// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;


abstract contract Calci{
     function  getResult() virtual public view returns(uint);
}

contract Useit is Calci{
      function getResult() public pure override returns(uint){
        uint a=10;
        uint b=20;
        uint ans=a+b;
        return ans;
      }
}