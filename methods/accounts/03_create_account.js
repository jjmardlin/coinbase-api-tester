/**
 * Create an account
 *
 * Docs:
 *   https://developers.coinbase.com/api#create-account
 * Lib:
 *   Client.prototype.createAccount
 *   https://github.com/coinbase/coinbase-node/blob/master/lib/Client.js
 */

var client = require('../../client.js');

var sampleData = {
  name: 'Savings Wallet'
};

client.createAccount(sampleData, function(err, response) {
  if (err) {
    console.log(err.message);
  } else {
    console.log(response);
  }
});