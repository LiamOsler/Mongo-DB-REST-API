var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  username: String,
  email: String,
  about: String,
}, {timestamps: true});

module.exports = mongoose.model("users", schema)
