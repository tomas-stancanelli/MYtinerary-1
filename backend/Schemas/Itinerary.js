var mongoose = require('mongoose');

var itinerarySchema = new mongoose.Schema({
    title: String,
    profile_pic: String,
    rating: Number,
    duration: Number,
    price: Number,
    hashtags: Array,
    cityId: String
});

console.log("Soy Itinerary.js")

var Itinerary = mongoose.model('Itinerary', itinerarySchema);

//MUY IMPORTANTE, SI NO ESTÁ RUTEADO HACIA EL SERVER NO LEVANTA LOS SCHEMAS

// var newItinerary = new Itinerary({ title: 'Brewery Tour', profile_pic: 'https://www.originalhamiltonbeertours.ca/uploads/1/2/4/0/124077689/original-hamilton-beer-tours-1_4_orig.jpg', rating: 10, duration: 8, price: 500, hashtags: ['beer', 'alcohol', 'fun', 'hangover'], cityId: '5dd579361c9d440000287646' });
// console.log(newItinerary.title, newItinerary.rating);

// newItinerary.save(function (err, newItinerary) {
//     if (err) return console.error(err);
//     console.log("Guarde un itinerario en la DB! Se llama ", newItinerary.title);
// });



module.exports = Itinerary;