const hre=require("hardhat");

const main=async()=>{
  const Funders=await hre.ethers.getContractFactory("Funder");
  const funders=await Funders.deploy();
  await funders.deployed();
  console.log("Funders contract deployed at:",funders.address);
}


const runMain=async()=>{
  try{
    await main();
    process.exit(0);
  }
  catch(err){
    console.log(err)
    process.exit(1)
  }
}

runMain()