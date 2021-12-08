// how to get ETH address
// - generate public/private SECP256k1 keypair
// - hash the public key (keccak256)
// - drop the first 12 bytes

const Wallet = require("ethereujs-wallet").default;
const keccak256 = require("keccak256");
