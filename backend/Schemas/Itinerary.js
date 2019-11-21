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

// var newItinerary = new Itinerary({ title: 'Parc Güell', profile_pic: 'https://barcelonando.com/es/wp-content/uploads/2018/12/park-guell-barcelona.jpeg', rating: 10, duration: 4, price: 180, hashtags: ['park', 'walk', 'architecture', 'art', 'color', 'fresh air', 'antonio gaudi', 'surrealism', 'mountain'], cityId: 'barcelona' });
// console.log(newItinerary.title, newItinerary.rating);

// newItinerary.save(function (err, newItinerary) {
//     if (err) return console.error(err);
//     console.log("Guarde un itinerario en la DB! Se llama ", newItinerary.title);
// });



module.exports = Itinerary;