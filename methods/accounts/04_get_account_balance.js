/**
 * Get account's balance
 *
 * Docs:
 *   https://developers.coinbase.com/api#get-account39s-balance
 * Lib:
 *   Account.prototype.getBalance
 *   https://github.com/coinbase/coinbase-node/blob/master/lib/model/Account.js
 */

var async   = require('async');
var Account = require('coinbase').model.Account;
var client  = require('../../client.js');


async.waterfall([
  function(callback) {
    // Fetch an account
    client.getAccounts(function(err, accounts) {
      if (err) {
        console.log(err);
      } else {
        callback(null, accounts[0]);
      }
    });
  }, function(sampleAccount, callback) {

    var myAccount = new Account(client, sampleAccount);
    // Alternatively, you can manually specify an account ID if needed
    // var myAccount = new Account(client, {'id': 'A1234'});

    myAccount.getBalance(function(err, balance) {
      if (err) {
        console.log(err);
      } else {
        console.log(balance);
      }
    });
  }
]);