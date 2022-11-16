async  function main(){

    const[deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:" , deployer.address);
    console.log("Account balance ", (await deployer.getBalance()).toString());

    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy();

    console.log("Tpken address:",token.address);
}
main().then(()=> process.exit(0)).catch((error)=>{
    console.error(error);
    process.exit(1);
});

/*
 Value:               0 ETH
  Gas used:            739749 of 739749
  Block #1:            0xb45b0d6ccd8f016c08d54a9f7c28498d8b0754cc7e7c661515b2a56ba313bf1f

 */
