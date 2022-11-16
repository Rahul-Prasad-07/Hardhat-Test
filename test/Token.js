const {expect} = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", function(){
    it("Deployment should assign the total supply of tokens to the owner",async function(){

        const[owner] = await ethers.getSigner();
        const Token = await ethers.getContractFactory("TOken");

        const hardhatToken = await Token.deploy();

        const ownerBalance = await hardhatToken.balanceOf(owner.address);
        expect(await hardhatToken.totalsupply()).to.equal(ownerBalance);


    });
});