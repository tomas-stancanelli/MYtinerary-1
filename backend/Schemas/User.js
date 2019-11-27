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
  
  // var newCity = new City({ name: 'AAAKOAKAOKAKOA', country: 'JAKSJDAKSD' });
  // console.log(newCity.name, newCity.country);
  
  // newCity.save(function (err, newCity) {
  //   if (err) return console.error(err);
  //   console.log("Guarde una ciudad en la DB!", newCity.name, newCity.country);
  // });
  
  module.exports = User;