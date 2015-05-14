/**
 * Get current BTC sell price
 *
 * Docs:
 *   https://developers.coinbase.com/api#get-the-sell-price-for-bitcoin
 * Lib:
 *   Account.prototype.getSellPrice
 *   https://github.com/coinbase/coinbase-node/blob/master/lib/Client.js
 */

var client = require('../../client.js');

client.getSellPrice({"qty": 1, "currency": "USD"}, function(err, price) {
  if (err) {
    console.log(err);
  } else {
    console.log(price);
  }
});