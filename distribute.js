// create a method that will be called by the web server

// in this method:
// - read the accounts.txt file
// put the N accounts into an array
// get the totalsupply remaining for the token owner
// calculate 5% of that totalSupply
// loop N times, and execute N transactions transferring the token from owner to address in array
// collect tea and medals

let fs = require("fs");
let BigNumber = require("big-number")

let method = require('./method.js');

// this sets up my .env file
require('dotenv').config()

// let's load our environment variables
infuraToken = process.env.INFURA_TOKEN
contractAddress = process.env.CONTRACT_ADDRESS
ownerAddress = process.env.OWNER_ADDRESS
privateKey = Buffer.from(process.env.SUPER_SECRET_PRIVATE_KEY, 'hex')

const distribute = async() => {
    // read in the file
    let distributionAddresses = fs.readFileSync('./accounts.txt', 'utf8').split('\n');
    console.log(`distro addresses are: ${ distributionAddresses}`);

    let bal = new BigNumber(1000000000000000000000000000000) // this should be owner balance from smart contract
    let fivePerCent = bal.div(20)
    // then we need to divide fivePerCent by the number of addresses in the file
    let accounts = distributionAddresses.length
    console.log(` we have ${accounts} accounts in our file`) 

}

distribute()
//module.exports = { distribute }