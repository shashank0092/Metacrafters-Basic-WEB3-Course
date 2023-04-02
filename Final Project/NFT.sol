// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract MyToken{

    string public Token_Name="SHUKLA";
    string public Token_Abbrv="SHUKLA";
    uint public Total_Supply=0;



    mapping (address=>uint) public balances;

    function mint(address _to,uint _value) public {
        
        Total_Supply+=_value;
        balances[_to]+=_value;

    }

    function burn(address _from,uint _value)public{
        
        if(balances[_from]>=_value){
        Total_Supply-=_value;
        balances[_from]-=_value;
        }
       

    }
}