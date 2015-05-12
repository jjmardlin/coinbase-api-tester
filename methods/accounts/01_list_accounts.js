/**
 * List accounts
 *
 * Docs:
 *   https://developers.coinbase.com/api#list-accounts
 * Lib:
 *   Client.prototype.getAccounts
 *   https://github.com/coinbase/coinbase-node/blob/master/lib/Client.js
 */

var client = require('../../client.js');

client.getAccounts(function(err, accounts) {
  if (err) {
    console.log(err);
  } else {
    console.log(accounts);
  }
});