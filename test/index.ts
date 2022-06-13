import { expect } from "chai";
import { ethers } from "hardhat";

// describe("Greeter", function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//     await greeter.deployed();

//     expect(await greeter.greet()).to.equal("Hello, world!");

//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // wait until the transaction is mined
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });


describe("Struct-Example", function () {
  it("#Test1 - Get-and-Set-Customer", async function () {
    const Contract = await ethers.getContractFactory("StructCon");
    const contract = await Contract.deploy();
    await contract.deployed();

    await contract.setCustomer("kishor","naik","1111111111","kishor@gmail.com");
    let customer=await contract.getCustomer();
    console.log(`Customer Object: ${JSON.stringify(customer)}`);
    console.log(`Customer First Name : ${customer.firstName}`);
    console.log(`Customer Last Name : ${customer.lastName}`);
    console.log(`Customer Communication : ${customer.communication}`);
    console.log(`Customer Mobile : ${customer.communication.mobileNo}`)
    console.log(`Customer Email Id : ${customer.communication.emailId}`)

    expect(customer.firstName).to.equal("kishor");
  });

  it.only("#Test2 - Get-and-Set-Customer", async function () {
    const Contract = await ethers.getContractFactory("StructCon");
    const contract = await Contract.deploy();
    await contract.deployed();

    await contract.setCustomers("kishor","naik","1111111111","kishor@gmail.com");
    await contract.setCustomers("eshaan","naik","2222222222","eshaan@gmail.com");

    let customers:any[]=await contract.getCustomers();
    console.log(`Customer Object: ${JSON.stringify(customers)}`);

    expect(customers.length).to.equal(2);
  });


});