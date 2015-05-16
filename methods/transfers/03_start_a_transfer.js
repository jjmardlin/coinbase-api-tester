/**
 * Start a transfer that is in the created state
 *
 * Docs:
 *   https://developers.coinbase.com/api#start-a-transfer-that-is-in-the-created-state
 * Lib:
 *   Transfer.prototype.commmit
 *   https://github.com/coinbase/coinbase-node/blob/master/lib/model/Transfers.js
 */
 
var client = require('../../client.js');
var Account = require('coinbase').model.Account;
var Transfer = require('coinbase').model.Transfer;
var async  = require('async');

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
    
    //Create a buy/sell order using `commit: false`
    //myAccount.sell( { qty: 10, currency: "USD", commit : false}, function(err, transfer){
    myAccount.buy( { qty: 10, currency: "USD", commit : false}, function(err, transfer){
      if (err){
        console.log(err);
      } else {
        console.log("Tranfer ID: " + transfer.id + ", type: " + transfer.type + ", detailed status: " +transfer.detailed_status);
        callback( null, transfer.id, myAccount);
      }
    });
  }, function(transferId, myAccount){
      
    // Optionally, you can manually specify a transfer ID here if needed
    // var transferId = '';
    
    var myTransfer = new Transfer(client, {id : transferId }, myAccount);

    myTransfer.commit( function(err, transfer){
      if (err){
        console.log(err);
      } else {
        console.log("Tranfer ID: " + transfer.id + ", type: " + transfer.type + ", detailed status: " +transfer.detailed_status);
        // console.log(transfer);
      }
    });
  },
]);
