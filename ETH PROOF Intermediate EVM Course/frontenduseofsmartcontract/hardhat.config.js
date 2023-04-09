require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config()

const API_KEY=process.env.API_KEY;
const METAMASK_ADDRESS=process.env.METAMASK_ADDRESS;
// console.log(API_KEY);
// console.log(METAMASK_ADDRESS)
module.exports = {
  solidity: "0.8.18",

  networks:{
      // goerli:{
      //   url:`https://eth-goerli.g.alchemy.com/v2/${API_KEY}`,
      //   accounts:[
      //     `${METAMASK_ADDRESS}`
      //   ]
     // } 

    
      
      sepolia:{
        url:"",
        accounts:[''],
        gas: 2100000,
        gasPrice: 8000000000
      }

       
  },
  
};
