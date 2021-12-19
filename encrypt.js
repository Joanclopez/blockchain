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

console.log(`encrypted '${message}' to ${ciphertext.toString('hex')}`);
console.log(`using encryption key ${encryptionKey.toString('hex')} and nonce ${nonceBuffer.toString('hex')}`);

var decryptedMessage = sodium.sodium_malloc(ciphertext.length);

sodium.crypto_stream_chacha20_xor(decryptedMessage, ciphertext, nonceBuffer, encryptionKey);
console.log(`decrypted '${decryptedMessage}' from ${ciphertext.toString('hex')}`);
console.log(`using encryption key ${encryptionKey.toString('hex')} and nonce ${nonceBuffer.toString('hex')}`);

// VERY IMPORTANT NOTE: If you use the same nonce for a different message, you will expose your encryption key!!
// nonces are numbers that are used only ONCE!!
// random nonces can be used (they are usually included with the ciphertext)
// but then the size of the random nonce determines how many messages you can send safely with the same key



