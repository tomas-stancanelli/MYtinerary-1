var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var itinerarySchema = new Schema({
    title: String,
    city: String,
    country: String,
    username: String,
    userPhoto: String,
    rating: Number,
    duration: Number,
    price: String,
    hashtags: Array,
    activities: Array
});

var Itinerary = mongoose.model('Itinerary', itinerarySchema);

module.exports = Itinerary;