/**
 * Show a transaction
 *
 * Docs:
 *   https://developers.coinbase.com/api#show-a-transactions
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
        callback(null, accounts[0]);
      }
    });
  }, function(sampleAccount, callback) {

    var myAccount = new Account(client, sampleAccount);
    // Alternatively, you can manually specify an account ID if needed
    // var myAccount = new Account(client, {'id': 'A1234'});

    // Get a list of transactions
    myAccount.getTransactions(1, 25, function(err, txns) {
      if (err) {
        console.log(err);
      } else {
        callback(null, myAccount, txns[0]);
      }
    });
  }, function(myAccount, sampleTransaction, callback) {

    var sampleTransactionId = sampleTransaction.id;
    // Alternatively, you can manually specify a transaction ID if needed
    // var sampleTransactionId =  'A1234';

    myAccount.getTransaction( sampleTransactionId,  function(err, txn) {
      if (err) {
        console.log(err);
      } else {
        console.log(txn);
      }
    });
  }
]);

