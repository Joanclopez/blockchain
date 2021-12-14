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





