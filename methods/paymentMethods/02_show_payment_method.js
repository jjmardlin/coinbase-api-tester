/**
 * List user's payment methods
 *
 * Docs:
 *   https://developers.coinbase.com/api#show-a-payment-method
 * Lib:
 *   Client.prototype.getPaymentMethod
 *   https://github.com/coinbase/coinbase-node/blob/master/lib/Client.js
 */

var client = require('../../client.js');
var async  = require('async');

async.waterfall([
  function(callback){
    // Fetch current user to get a user ID
    client.getPaymentMethods(function(err, payments) {
      if (err) {
        console.log(err);
      } else {
        callback(null, payments[0].id);
      }
    });
  }, function(paymentId, callback) {

    // Optionally, you can manually specify a payment method ID here if needed
    // var paymentId = '';

    client.getPaymentMethod(paymentId, function(err, account) {
      if (err) {
        console.log(err);
      } else {
        console.log(account);
      }
    });
  }
]);

