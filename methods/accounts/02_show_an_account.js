/**
 * Show an account
 *
 * Docs:
 *   https://developers.coinbase.com/api#show-an-account
 * Lib:
 *   Client.prototype.getAccount
 *   https://github.com/coinbase/coinbase-node/blob/master/lib/Client.js
 */

var client = require('../../client.js');
var async  = require('async');

async.waterfall([
  function(callback) {
    // Fetch accounts to get an account ID
    client.getAccounts(function(err, accounts) {
      if (err) {
        console.log(err);
      } else {
        callback(null, accounts[0].id);
      }
    });
  }, function(accountId, callback) {

    // Optionally, you can manually specify an account ID here if needed
    // var accountId = '';

    client.getAccount(accountId, function(err, account) {
      if (err) {
        console.log(err);
      } else {
        console.log(account);
      }
    });
  }
]);