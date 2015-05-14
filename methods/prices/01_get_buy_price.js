/**
 * Get current BTC buy price
 *
 * Docs:
 *   https://developers.coinbase.com/api#get-the-buy-price-for-bitcoin
 * Lib:
 *   Account.prototype.getBuyPrice
 *   https://github.com/coinbase/coinbase-node/blob/master/lib/Client.js
 */

var client = require('../../client.js');

client.getBuyPrice({"qty": 1, "currency": "USD"}, function(err, price) {
  if (err) {
    console.log(err);
  } else {
    console.log(price);
  }
});