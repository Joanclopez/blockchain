var sodium = require("sodium-native");

// encryption
// decryption
// signing/verification
// key derivation (ed25519 - c25519 keys)
// hashing
// ecdh (elliptic curve diffie hellman)


// what we'll do next week
// ecdh
// hashing
// signature & verification
// encryption and decryption
// perfect forward secrecy (take a look at it)

// Elliptic Curve Diffie Hellman
// Alice has a public key and a private key
// Bob has a public key and a private key
// Alice shares public key
// Bob shares public key

// Using Alice's public key, and his private key, Bob can generate secret S
// Using Bob's public key, and her private key, Alice can generate secret S

// G is the generator point (same for everyone with the same algorithm)
// private key is just a very big number (256-bit number)
// Alice's Public Key = G * Alice's Private Key (PrivKey)

// given a specific public key, it is very, very hard to work out the private key

// Using Alice's public key (G * PrivKeyAlice), and his private key (PrivKeyBob)
// , Bob can generate secret S (G * PrivKeyAlice * PrivKeyBob)

// Using Bob's public key (G * PrivKeyBob), and her private key (PrivKeyAlice)
// , Alice can generate secret S (G * PrivKeyBob * PrivKeyAlice)

// (G * PrivKeyAlice * PrivKeyBob) = (G * PrivKeyBob * PrivKeyAlice)

// An Attacker, Charlie, will not generate the same secret S

// 1. Make an x25519 keypair for Alice
// step 1 allocate memory
var aliceX25519PubKey = sodium.sodium_malloc(sodium.crypto_box_PUBLICKEYBYTES);
var aliceX25519PrivKey = sodium.sodium_malloc(sodium.crypto_box_SECRETKEYBYTES);

// create the keypair
sodium.crypto_box_keypair(aliceX25519PubKey, aliceX25519PrivKey);

// log the alice key output (backdoor)
console.log("Alice keypair created.");
console.log(`Public ${sodium.crypto_box_PUBLICKEYBYTES}-byte key created for Alice: 0x${aliceX25519PubKey.toString('hex')}`);
console.log(`Secret ${sodium.crypto_box_SECRETKEYBYTES}-byte key created for Alice: 0x${aliceX25519PrivKey.toString('hex')}`);

// 2. Make an x25519 keypair for Bob
var bobX25519PubKey = sodium.sodium_malloc(sodium.crypto_box_PUBLICKEYBYTES);
var bobX25519PrivKey = sodium.sodium_malloc(sodium.crypto_box_SECRETKEYBYTES);

// create the keypair
sodium.crypto_box_keypair(bobX25519PubKey, bobX25519PrivKey);

// log the bob key output (backdoor)
console.log("Bob keypair created.");
console.log(`Public ${sodium.crypto_box_PUBLICKEYBYTES}-byte key created for Bob: 0x${bobX25519PubKey.toString('hex')}`);
console.log(`Secret ${sodium.crypto_box_SECRETKEYBYTES}-byte key created for Bob: 0x${bobX25519PrivKey.toString('hex')}`);

// 3. Alice creates a shared secret with Bob's x25519 public key

// allocate the memory for the secret
var aliceSharedSecret = sodium.sodium_malloc(sodium.crypto_scalarmult_BYTES);

// wipe the memory location of the secret (overwrite with zeros)
sodium.sodium_memzero(aliceSharedSecret);

// log expected size of secret
console.log(`Secret will be ${sodium.crypto_scalarmult_BYTES}-bytes long`);

// (PubKeyBob * PrivKeyAlice) = (G * PrivKeyBob * PrivKeyAlice) = S

// ALICE generating secret (bob pubkey, alice priv key)
sodium.crypto_scalarmult(aliceSharedSecret, aliceX25519PrivKey, bobX25519PubKey);
console.log(`ALICE: ecdh-generated secret is: 0x${aliceSharedSecret.toString('hex')}`);

// 4. Bob creates a shared secret with Alice's x25519 public key

var bobSharedSecret = sodium.sodium_malloc(sodium.crypto_scalarmult_BYTES);
sodium.sodium_memzero(bobSharedSecret);

// (PubKeyAlice * PrivKeyBob) = (G * PrivKeyAlice * PrivKeyBob) = S

// BOB generating secret (alice pubkey, bob priv key)

sodium.crypto_scalarmult(bobSharedSecret, bobX25519PrivKey, aliceX25519PubKey);
console.log(`BOB: ecdh-generated secret is: 0x${bobSharedSecret.toString('hex')}`);











