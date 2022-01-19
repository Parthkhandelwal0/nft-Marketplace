require("@nomiclabs/hardhat-waffle");
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()
const projectId= "8b8c278949a18eff61119fd0"
module.exports = {
  defaultNetwork: "hardhat",
  networks : {
    hardhat:{
      chainId: 1337
    },
    mumbai: {
      url: `https://speedy-nodes-nyc.moralis.io/${projectId}/polygon/mumbai`,
      accounts: [privateKey]
    },
    mainnet:{
      url: `https://speedy-nodes-nyc.moralis.io/${projectId}/polygon/mainnet`
    },
  },
  solidity: "0.8.4",
};
