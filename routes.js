const express = require('express')
const router = express.Router();
const City = require('./City.js')

router.get('/api/cities', async (req, res) => {
    var ciudades = await City.find(function (err, allCities) {
        if (err) return console.error(err);
        console.log("Todas las ciudades desde City.find", allCities);
    })
    res.json({ ciudades })
});


module.exports = router;
