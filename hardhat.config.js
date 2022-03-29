require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


module.exports = {
  solidity: "0.8.4",
  networks:{
    mumbai:{
      url: process.env.RPC,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      apiKey: process.env.API_DEFENDER_KEY,
      apiSecret: process.env.API_DEFENDER_SECRET,
    }
  }
};
