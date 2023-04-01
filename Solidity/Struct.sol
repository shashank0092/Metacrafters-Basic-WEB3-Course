// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract Structure {
    struct Car {
        string model;
        uint year;
        address owner;
    }

    Car public car;
    Car[] public cars;
    mapping (address => Car[]) public carsByOwner;


    function examples() external { 
        Car memory toyota=Car("Toyota",1990,msg.sender);
        Car memory lambo=Car({model:"Lambor",year:1980,owner:msg.sender});
        Car memory tesla;
        tesla.model="Tesla";
        tesla.owner=msg.sender;
        tesla.year=2010;

        cars.push(toyota);
        cars.push(lambo);
        cars.push(tesla);

        cars.push(Car("Ferrari",2020,msg.sender));

        Car storage _car=cars[0];
        _car.year=1999;
        delete _car.owner;
        delete cars[1];


    }
}