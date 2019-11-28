var mongoose = require('mongoose');

var Schema = mongoose.Schema;


//   newItinerary.save(function (err, newItinerary) {
//     if (err) return console.error(err);
//     console.log("Guarde un itinerario en la DB! Se llama ", newItinerary.title);
// });


//POSIBLE SCHEMA
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

//MUY IMPORTANTE, SI NO ESTÁ RUTEADO HACIA EL SERVER NO LEVANTA LOS SCHEMAS

// var newItinerary = new Itinerary({
//     title: "Lass on the lash",
//     city: "Dublin",
//     country: "Ireland",
//     username: "BoozyBabeXOXO",
//     userPhoto: "https://i.imgur.com/GI4bb2T.png",
//     rating: 1.8,
//     duration: 4,
//     price: "$$$",
//     hashtags: ['#Booze', '#Ireland', '#Pubs'],
//     activities: [
//         {
//             Name: "The Long Hall Pub",
//             Adress: "51 South Great George's Street, Dublin 2, Ireland",
//             Photo: "the-long-hall.jpg",
//             Time: 1,
//             Cost: 15,
//             Comments: "So tacky but great drinks"
//         }
//         , {
//             Name: "Fade Street Social Restaurant",
//             Adress: "4 Fade St, Dublin 2, D02 NF77, Ireland",
//             Photo: "fade-street-social.jpg",
//             Time: 2,
//             Cost: 45,
//             Comments: "Yummy food"
//         }, {
//             Name: "Capitol Lounge",
//             Adress: "1 Aungier St, Dublin 2, D02 HF72, Ireland",
//             Photo: "capitol-lounge.jpg",
//             Time: 1,
//             Cost: 18,
//             Comments: "Good cocktails and cute Irish guys, perfect for after dinner ;)"
//         }
//     ]
// });

// console.log(newItinerary.title, newItinerary.rating);

// newItinerary.save(function (err, newItinerary) {
//     if (err) return console.error(err);
//     console.log("Guarde un itinerario en la DB! Se llama ", newItinerary.title);
// });




module.exports = Itinerary;