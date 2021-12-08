// how to get ETH address
// - generate public/private SECP256k1 keypair
// - hash the public key (keccak256)
// - drop the first 12 bytes

const Wallet = require("ethereumjs-wallet").default;
const keccak256 = require("keccak256");


const getWalletDetails = async() => {
    console.log("getting details...");
    const wallet = Wallet.generate();
    console.log("generated wallet...");
    console.log("wallet public key: " + wallet.getPublicKeyString())
}

getWalletDetails();