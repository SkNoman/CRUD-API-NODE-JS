const crypto = require('crypto');

const accessTokenSecret = crypto.randomBytes(64).toString('hex');
//PRINT UNIQUE ACCESS TOKEN
console.log('Unique Access Token:',accessTokenSecret);
