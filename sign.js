var sodium = require("sodium-native");

// you sign a message with the private key
// someone else can verify that with the public key
// typically you sign a hash, not the actual message
// provide the message, publickey, signature

// create Alice signing key
// sign something with the private signing key
// verify that something with the public signing key

// C25519 is used for signing
// X25519 is used for ecdh
// but.. you can convert C25519 to X25519

// 1. create Alice signing key
var alicePublicSigningKey = sodium.sodium_malloc(sodium.crypto_sign_PUBLICKEYBYTES);
var alicePrivateSigningKey = sodium.sodium_malloc(sodium.crypto_sign_SECRETKEYBYTES);

// console.log(`public key will be ${sodium.crypto_sign_PUBLICKEYBYTES}-bytes long`);
// console.log(`secret key will be ${sodium.crypto_sign_SECRETKEYBYTES}-bytes long`);

sodium.sodium_memzero(alicePublicSigningKey);
sodium.sodium_memzero(alicePrivateSigningKey);
//console.log(`secret key is?  ${alicePrivateSigningKey.toString('hex')}`);

sodium.crypto_sign_keypair(alicePublicSigningKey, alicePrivateSigningKey);

// backdoor
console.log(`public key is?  0x${alicePublicSigningKey.toString('hex')}`);
console.log(`secret key is?  0x${alicePrivateSigningKey.toString('hex')}`);

// 2. sign something with the private signing key

var message = "Alice is not Satoshi Nakamoto, for sure and for real";
console.log(`message is ${message.length} characters long`);

// hash the message
var messageHash = sodium.sodium_malloc(sodium.crypto_hash_sha256_BYTES);
console.log(`message hash will be ${sodium.crypto_hash_sha256_BYTES}-bytes long`);

var messageBuffer = Buffer.from(message);
console.log(`message buffer ${messageBuffer}`)

sodium.crypto_hash_sha256(messageHash, messageBuffer)

console.log(`message hash is: 0x${messageHash.toString('hex')}`)

// sign the message hash
var aliceSignature = sodium.sodium_malloc(sodium.crypto_sign_BYTES);

console.log(`alice's signature will be ${sodium.crypto_sign_BYTES}-bytes long`)

sodium.crypto_sign_detached(aliceSignature, messageHash, alicePrivateSigningKey)

console.log(`signature is: 0x${aliceSignature.toString('hex')}`);

// verify the signature

var bool = sodium.crypto_sign_verify_detached(aliceSignature, messageHash, alicePublicSigningKey)

console.log(`signature verified: ${bool}`);