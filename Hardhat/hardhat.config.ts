import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const { PRIVATE_KEY, LISK_RPC_URL, ARC_RPC_URL } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.28",

  networks: {
    lisk: {
      url: LISK_RPC_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },

    arc: {
      url: ARC_RPC_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    }
  },
};

export default config;
