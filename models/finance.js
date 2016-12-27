var mongoose = require('mongoose');

// Transaction Schema
var TransactionSchema = mongoose.Schema({
  user_id: {
    type: String,
    index:true
  },
  category: {
    type: String
  },
  type: {
    type: String
  },
  amount: {
    type: String
  }
});

var Transaction = module.exports = mongoose.model('Transaction', TransactionSchema);

module.exports.createTransaction = function(transaction, callback){
  transaction.save(callback);
}

module.exports.getAllTransactionForUser = function(user_id, callback){
  var query = {user_id: user_id};
  Transaction.find(query, callback);
}