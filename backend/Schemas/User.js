var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    image: String,
    email: String,
    firstname: String,
    lastname: String,
    country: String
  });
  
  var User = mongoose.model('User', userSchema, 'users');
  
  module.exports = User;