/**
 * Get current user's accounts
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
    console.log(err);
  } else {
    console.log(accounts);
  }
});