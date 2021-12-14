var sodium = require("sodium-native");

// create a message
// get a secret
// encrypt the message
// decrypt the message
// hopefully get the same message out!

var message = "secret message to be encrypted";

var messageText = sodium.sodium_malloc(message.length);
var ciphertext = sodium.sodium_malloc(message.length);

console.log(`encrypted message is ${message.length}-characters long`)
var nonce = 0;
var nonceBuffer = sodium.sodium_malloc(sodium.crypto_stream_chacha20_NONCEBYTES);

nonceBuffer.writeInt32BE(nonce, 0)

console.log(`nonce buffer is: ${nonceBuffer.toString('hex')}`)

// encrypt the message
// using ecdh secret: 0xa56fe0c29f4c3bf7c29d31ad817ba7f7b519bad990ea34aa32aeba2e17145b77
var encryptionKey = Buffer.from('a56fe0c29f4c3bf7c29d31ad817ba7f7b519bad990ea34aa32aeba2e17145b77', 'hex')
sodium.crypto_stream_chacha20_xor(ciphertext, Buffer.from(message), nonceBuffer, encryptionKey)

console.log(`cipher text: ${ciphertext.toString('hex')}`);
console.log(`message: ${message}`)
console.log(`nonce buffer: ${nonceBuffer.toString('hex')}`);
console.log(`encryption key: ${encryptionKey.toString('hex')}`);
console.log('------------')

// console.log(`cipher text: ${ciphertext.toString('hex')}`);
// console.log(`cipher text length: ${ciphertext.length}-bytes`)

var decryptedMessage = sodium.sodium_malloc(ciphertext.length);

console.log(`cipher text: ${ciphertext.toString('hex')}`);

sodium.crypto_stream_chacha20_xor(decryptedMessage,ciphertext,  nonceBuffer, encryptionKey);

console.log(`cyphertext length ${ciphertext.length}`)
console.log(`cipher text: ${ciphertext.toString('hex')}`);
console.log(`nonce buffer: ${nonceBuffer.toString('hex')}`);
console.log(`encryption key: ${encryptionKey.toString('hex')}`);

console.log(`decrypted message is: ${decryptedMessage.toString()}`);


