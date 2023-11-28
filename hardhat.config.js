require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

const privateKey = "<your-private-key>";

module.exports = {
  solidity: { version: "0.8.0" },
  networks: {
    testnet: {
      url: `https://testnet-rpc.areon.network`,
      accounts: [`0x${privateKey}`],
    },
    ganache: {
      url: `http://127.0.0.1:7545`,
    },
  },
};
