//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

contract ERToken is ERC20 {
    constructor(uint256 totalSupply) ERC20("ERToken", "DVT") {
        _mint(msg.sender, totalSupply);
    }
}
