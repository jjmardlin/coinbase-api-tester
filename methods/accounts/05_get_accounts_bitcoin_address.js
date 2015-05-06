/**
 * Create a new bitcoin address for an account
 *
 * Docs:
 *   https://developers.coinbase.com/api#create-a-new-bitcoin-address-for-an-account
 * Lib:
 *   Account.prototype.createAddress
 *   https://github.com/coinbase/coinbase-node/blob/master/lib/model/Account.js
 */

var async   = require('async');
var Account = require('coinbase').model.Account;
var client  = require('../../client.js');


var args = {
 callback_url: 'http://www.example.com/callback',
 label: 'Dalmation donations'
};

async.waterfall([
  function(callback) {
    // Fetch an account
    client.getAccounts(function(err, accounts) {
      if (err) {
        console.log(err.message);
      } else {
        callback(null, accounts[0]);
      }
    });
  }, function(sampleAccount, callback) {

    var myAccount = new Account(client, sampleAccount);
    // Alternatively, you can manually specify an account ID if needed
    // var myAccount = new Account(client, {'id': 'A1234'});

    myAccount.createAddress(args, function(err, addressObj) {
      if (err) {
        console.log(err.message);
      } else {
        console.log(addressObj);
      }
    });
  }
]);