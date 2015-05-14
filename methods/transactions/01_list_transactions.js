/**
 * List transactions
 *
 * Docs:
 *   https://developers.coinbase.com/api#list-transactions
 * Lib:
 *   Client.prototype.getTransactions
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
        // console.log(accounts);
        callback(null,accounts[0]);
      }
    });
  }, function(sampleAccount, callback) {

    var myAccount = new Account(client, sampleAccount);
    // Alternatively, you can manually specify an account ID if needed
    // var myAccount = new Account(client, {'id': 'A1234'});

    myAccount.getTransactions(1, 25, function(err, txns) {
      if (err) {
        console.log(err);
      } else {
        console.log(txns);
      }
    });
  }
]);
 
