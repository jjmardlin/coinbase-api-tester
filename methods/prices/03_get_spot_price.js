/**
 * Get current BTC spot price
 *
 * Docs:
 *   https://developers.coinbase.com/api#get-the-spot-price-of-bitcoin
 * Lib:
 *   Account.prototype.getSpotPrice
 *   https://github.com/coinbase/coinbase-node/blob/master/lib/Client.js
 */

var client = require('../../client.js');

client.getSpotPrice({"qty": 1, "currency": "USD"}, function(err, price) {
  if (err) {
    console.log(err);
  } else {
    console.log(price);
  }
});