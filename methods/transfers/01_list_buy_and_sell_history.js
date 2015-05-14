/**
 * List a user's buy and sell history
 *
 * Docs:
 *   https://developers.coinbase.com/api#list-buy-and-sell-history
 * Lib:
 *   Accounts.prototype.getTransfers
 *   https://github.com/coinbase/coinbase-node/blob/master/lib/model/Account.js
 */

var client = require('../../client.js');
var Account = require('coinbase').model.Account;
var async  = require('async');

async.waterfall([
  function(callback) {
    // Fetch an account ID
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

    var myAccount = new Account(client, {id: accountId});

    myAccount.getTransfers(1, 25, function(err, transfers) {
      if (err) {
        console.log(err);
      } else {
        console.log(transfers);
      }
    });
  }
]);