// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract StructCon{

    struct Customer{
        string firstName;
        string lastName;
        Communication communication;
    }

    struct Communication{
        string mobileNo;
        string emailId;
    }

    Customer private _customer;
    Customer[] private _customers;

    function setCustomer(string memory _firstName,string memory _lastName,string memory _mobileNo,string memory _emailId) public{
        _customer = Customer(_firstName,_lastName,Communication(_mobileNo,_emailId));
    }

    function getCustomer() view public returns(Customer memory) {
        return _customer;
    }

    function setCustomers(string memory _firstName,string memory _lastName,string memory _mobileNo,string memory _emailId) public {
        Customer memory item=Customer(_firstName,_lastName,Communication(_mobileNo,_emailId));
        _customers.push(item);       
    }

    function getCustomers() view public returns(Customer[] memory){
        return _customers;
    }    

}