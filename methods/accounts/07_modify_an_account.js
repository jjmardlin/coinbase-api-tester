/**
 * Modify an account
 *
 * Docs:
 *   https://developers.coinbase.com/api#modify-an-account
 * Lib:
 *   Account.prototype.modify
 *   https://github.com/coinbase/coinbase-node/blob/master/lib/model/Account.js
 */

var async   = require('async');
var Account = require('coinbase').model.Account;
var client  = require('../../client.js');


var args = {
 name: 'Satoshi Wallet'
};

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

    myAccount.modify(args, function(err, modifiedAcct) {
      if (err) {
        console.log(err);
      } else {
        console.log(modifiedAcct);
      }
    });
  }
]);