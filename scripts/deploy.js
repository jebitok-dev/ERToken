const hre = require("hardhat");
const { ethers } = require("ethers");

async function main() {
  const ERToken = await hre.ethers.getContractFactory("ERToken");
  const erToken = await ERToken.deploy("1000000000000000000000000000");

  await erToken.deployed();

  console.log("Token deployed to:", erToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });