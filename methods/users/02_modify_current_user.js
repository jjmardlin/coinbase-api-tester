/**
 * Modify current user
 *
 * Docs:
 *   https://developers.coinbase.com/api#modify-current-user
 * Lib:
 *   User.prototype.modify
 *   https://github.com/coinbase/coinbase-node/blob/master/lib/model/User.js
 */

var client = require('../../client.js');
var User = require('coinbase').model.User;
var async  = require('async');

var args = {
  native_currency: 'GBP'
};

async.waterfall([
  function(callback){
    // Fetch current user to get a user ID
    client.getCurrentUser(function(err, user) {
      if (err) {
        console.log(err);
      } else {
        callback(null, user.id);
      }
    });
  }, function(userId, callback){

    var myUser = new User(client, {'id' : userId});

    myUser.modify(args, function(err, user) {
      if (err) {
        console.log(err);
      } else {
        console.log(user);
      }
    });
  }
]);

