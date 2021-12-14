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

// create Alice signing key
var alicePublicSigningKey = sodium.sodium_malloc(sodium.crypto_sign_PUBLICKEYBYTES);
var alicePrivateSigningKey = sodium.sodium_malloc(sodium.crypto_sign_SECRETKEYBYTES);

console.log(`public key will be ${sodium.crypto_sign_PUBLICKEYBYTES}-bytes long`);
console.log(`secret key will be ${sodium.crypto_sign_SECRETKEYBYTES}-bytes long`);

sodium.sodium_memzero(alicePublicSigningKey);
sodium.sodium_memzero(alicePrivateSigningKey);
//console.log(`secret key is?  ${alicePrivateSigningKey.toString('hex')}`);

sodium.crypto_sign_keypair(alicePublicSigningKey, alicePrivateSigningKey);

// backdoor
console.log(`public key is?  0x${alicePublicSigningKey.toString('hex')}`);
console.log(`secret key is?  0x${alicePrivateSigningKey.toString('hex')}`);