var mongoose = require('mongoose');

var citySchema = new mongoose.Schema({
    name: String,
    country: String,
    image: String,
    title: String
  });
  
  var City = mongoose.model('City', citySchema);
  
  module.exports = City;