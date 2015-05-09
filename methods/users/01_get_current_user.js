/**
 * Get Current User accounts
 *
 * Docs:
 *   https://developers.coinbase.com/api#get-current-user
 * Lib:
 *   Client.prototype.getCurrentUser
 *   https://github.com/coinbase/coinbase-node/blob/master/lib/Client.js
 */

var client = require('../../client.js');

client.getCurrentUser(function(err, accounts) {
  if (err) {
    console.log(err.message);
  } else {
    console.log(accounts);
  }
});