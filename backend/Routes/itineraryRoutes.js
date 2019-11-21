const express = require('express')
const router = express.Router();
const Itinerary = require('../Schemas/Itinerary.js')

router.get('/', async (req, res) => {
    var itinerariesFromRoutes = await Itinerary.find(function (err, allItineraries) {
        if (err) return console.error(err);
        console.log("Todos los itinerarios desde itineraryRoutes", allItineraries);
    })
    res.json({ itinerariesFromRoutes })
});


router.get('/:city_name', async (req, res) => {
    var itinerariesForACity = await Itinerary.find({ "cityId": req.params.city_name }, function (err, itineraries) {
        if (err) return console.error(err);
        console.log('Printing itineraries for a city')
    })
    res.json({ itineraries })
})



module.exports = router;