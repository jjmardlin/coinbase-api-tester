/**
 * Start a transfer that is in the created state
 *
 * Docs:
 *   https://developers.coinbase.com/api#start-a-transfer-that-is-in-the-created-state
 * Lib:
 *   Accounts.prototype.getTransfer
 *   https://github.com/coinbase/coinbase-node/blob/master/lib/model/Account.js
 */
 
var client = require('../../client.js');
var Account = require('coinbase').model.Account;
var async  = require('async');

//work in progress. To complete; will need to initiate a buy or sell with
//'commit = false' in order to complete with order with /transfers/:id:/commit

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

      myAccount.getTransfers( 1, 25, function(err, transfers){
        if (err){
          console.log(err.message);
        } else {
          callback(null, myAccount, transfers[0].id);
        }
      });
    }, function( myAccount, transferId, callback){
      
      // Optionally, you can manually specify a transfer ID here if needed
      // var transferId = '';

      myAccount.getTransfer( transferId, function(err, transfers){
        if (err){
          console.log(err.message);
        } else {
          console.log(transfers);
        }
      });
    },
]);