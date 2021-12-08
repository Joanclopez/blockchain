// how to get ETH address
// - generate public/private SECP256k1 keypair
// - hash the public key (keccak256)
// - drop the first 12 bytes

const Wallet = require("ethereumjs-wallet").default;
const keccak256 = require("keccak256");


const getWalletDetails = async() => {
    // generate public/private SECP256k1 keypair
    const wallet = Wallet.generate();
    console.log("generated keypair...");

    console.log("wallet public key: " + wallet.getPublicKeyString())

    // hash the public key (keccak256)
    const pubKey = wallet.getPublicKey();
    const hashedPublicKey = keccak256(pubKey).toString('hex');
    console.log(`hashed public key: 0x${hashedPublicKey}`);

    // - drop the first 12 bytes
    var ethAddress = hashedPublicKey.substring(24);
    console.log(`eth address is 0x${ethAddress}`);
}

getWalletDetails();

const bip39 = require('bip39');
const { hdkey } = require('ethereumjs-wallet');

// takes a seed phrase (mnemonic)
// converts the seed phrase into entropy
// takes in a 'path' to create a deterministic account

const getHDWalletDetails = async() => {
    console.log("getting hd wallet details...")

    const mnemonic = "secrit seed phrase goes here"

    let seed = await bip39.mnemonicToSeed(mnemonic);
}

//getHDWalletDetails()

