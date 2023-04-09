require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks:{
    goerli:{
      url:"https://eth-goerli.g.alchemy.com/v2/p455lghLZelJEBcu4BH44h9ZGjFUH5go",
      accounts:["2cf6416864aefd498247e0e167ca723c6241337c6812b0b8ff3c96c67c692572"]
    
    }
  }
};
