/**
 * Request bitcoin from an email address
 * Possibly also an account ID??
 *
 * Docs:
 * https://developers.coinbase.com/api#request-money
 * Lib:
 * Client.prototype.sendMoney
 * https://github.com/coinbase/coinbase-node/blob/master/lib/model/Account.js
 */

var async = require('async');
var Account = require('coinbase').model.Account;
var client = require('../../client.js');

var args = {
// See docs for options
            'to' : 'user1@example.com',
            'amount' : '1.234',
            'notes' : 'Sample transaction for you'
         };

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

    //Get a list of transactions
    myAccount.sendMoney( args, function(err, txn) {
      if (err) {
        console.log(err);
      } else {
        console.log(txn);
      }
    });
  }
]);

