/**
 * Request bitcoin from an email address
 *
 * Docs:
 * https://developers.coinbase.com/api#request-money
 *
 * Lib:
 * Client.prototype.requestMoney
 * https://github.com/coinbase/coinbase-node/blob/master/lib/model/Account.js
 */

var async = require('async');
var Account = require('coinbase').model.Account;
var client = require('../../client.js');

var args = {
// See docs for options
            'from' : 'user1@example.com',
            'amount_string' : '1.234',
            'amount_currency_iso' : 'USD',
            'notes' : 'Sample request'
         };

async.waterfall([
  function(callback) {
    // Fetch an account to request funds into
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
    myAccount.requestMoney( args, function(err, request) {
      if (err) {
        console.log(err);
      } else {
        console.log(request);
      }
    });
  }
]);
