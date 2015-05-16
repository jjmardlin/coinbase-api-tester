/**
 * Buy bitcoin
 *
 * Docs:
 *   https://developers.coinbase.com/api#start-a-transfer-that-is-in-the-created-state
 * Lib:
 *   Accounts.prototype.buy
 *   https://github.com/coinbase/coinbase-node/blob/master/lib/model/Account.js
 */

var client = require('../../client.js');
var Account = require('coinbase').model.Account;
var async  = require('async');

var args = {
    qty: 1,
    currency: 'USD'
};


async.waterfall([
  function(callback){
  // Fetch an account ID
    client.getAccounts(function(err, accounts){
      if(err){
        console.log(err.message);
      } else {
        callback( null, accounts[0].id);
      }
    });
  }, function( accountId, callback){

    // Optionally, you can manually specify an account ID here if needed
    // var accountId = '';

    var myAccount = new Account( client, {"id" : accountId });

    //Create a buy order
    myAccount.buy( args, function(err, transfer){
      if (err){
        console.log(err);
      } else {
        console.log(transfer);
      }
    });
  }]);