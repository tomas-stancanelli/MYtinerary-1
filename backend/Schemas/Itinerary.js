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

// var newItinerary = new Itinerary({ title: 'Buenos Aires Bike', profile_pic: 'https://www.picmonkey.com/blog/wp-content/uploads/2016/11/1-intro-photo-final.jpg', rating: 10, duration: 4, price: 180, hashtags: ['bike', 'exercise', 'health', 'fresh air', 'palermo', 'park', 'bike ride'], cityId: 'buenos_aires', user: "John Doe" });
// console.log(newItinerary.title, newItinerary.rating);

// newItinerary.save(function (err, newItinerary) {
//     if (err) return console.error(err);
//     console.log("Guarde un itinerario en la DB! Se llama ", newItinerary.title);
// });



module.exports = Itinerary;