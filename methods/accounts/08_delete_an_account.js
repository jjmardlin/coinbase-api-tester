/**
 * Delete an account
 *
 * Only non-primary accounts with zero balance can be deleted.
 *
 * Docs:
 *   https://developers.coinbase.com/api#delete-an-account
 * Lib:
 *   Account.prototype.delete
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
        // set this to a non-primary account
        callback(null, accounts[2]);
      }
    });
  }, function(sampleAccount, callback) {

    var myAccount = new Account(client, sampleAccount);

    // To manually specify an account ID
    // var myAccount = new Account(client, {'id': 'A1234'});

    myAccount.delete(function(err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });
  }
]);