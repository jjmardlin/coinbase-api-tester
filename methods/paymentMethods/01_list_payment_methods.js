/**
 * List user's payment methods
 *
 * Docs:
 *   https://developers.coinbase.com/api#payment-methods
 * Lib:
 *   Client.prototype.getPaymentMethods
 *   https://github.com/coinbase/coinbase-node/blob/master/lib/Client.js
 */

var client = require('../../client.js');

client.getPaymentMethods(function(err, payments) {
  if (err) {
    console.log(err);
  } else {
    console.log(payments);
  }
});