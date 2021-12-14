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

console.log(`secret key is?  ${alicePublicSigningKey.toString('hex')}`);