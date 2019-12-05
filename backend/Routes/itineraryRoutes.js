const express = require('express')
const router = express.Router();
const Itinerary = require('../Schemas/Itinerary.js')

router.get('/', async (req, res) => {
    var itinerariesFromRoutes = await Itinerary.find(function (err, allItineraries) {
        if (err)
            return console.error(err);
    })
    res.json({ itinerariesFromRoutes })
});

router.get('/:city_name', async (req, res) => {
    var itinerariesForACity = await Itinerary.find({ "city": ((req.params.city_name.split('_').map(word => word[0].toUpperCase() + word.slice(1)).join(" "))) }, function (err, itineraries) {
        if (err)
            return console.error(err);
    })
    res.json({ itinerariesForACity })
})

router.put('/:city_name', async (req, res) => {

    var itinerariesForACity = await Itinerary.find({ "city": ((req.params.city_name.split('_').map(word => word[0].toUpperCase() + word.slice(1)).join(" "))) },

        function (err, it) {
            if (err)
                return console.error(err);
        })

    var key

    for (var i = 0; i < itinerariesForACity.length; i++) {
        if (itinerariesForACity[i].title == req.body.itineraryCommented) {
            itinerariesForACity[i].comments.push(req.body.newComment);
            key = i
        }
    }

    await itinerariesForACity[key].save();

    res.json({ itinerariesForACity })

})

router.post('/del/:city_name', async (req, res) => {


    var itinerariesForACity = await Itinerary.find({ "city": ((req.params.city_name.split('_').map(word => word[0].toUpperCase() + word.slice(1)).join(" "))) },

        function (err, it) {
            if (err)
                return console.error(err);
        })

    var key;

    for (var i = 0; itinerariesForACity.length; i++) {
        if (itinerariesForACity[i].title === req.body.title) {
            key = i;
            break;
        }
    }

    itinerariesForACity[key].comments.splice(req.body.key, 1)

    await itinerariesForACity[key].save();

    res.json({ itinerariesForACity })

})


module.exports = router;