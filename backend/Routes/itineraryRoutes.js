const express = require('express')
const router = express.Router();
const Itinerary = require('../Schemas/Itinerary.js')

router.get('/api/itineraries', async (req, res) => {
    var itinerariesFromRoutes = await itineraries.find(function (err, allItineraries) {
        if (err) return console.error(err);
        console.log("Todos los itinerarios desde itineraryRoutes", allItineraries);
    })
    res.json({ itinerariesFromRoutes })
});


module.exports = router;