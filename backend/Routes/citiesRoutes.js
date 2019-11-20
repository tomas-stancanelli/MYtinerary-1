const express = require('express')
const router = express.Router();
const City = require('../Schemas/City.js')

router.get('/api/cities', async (req, res) => {
    var ciudadesFromRoutes = await City.find(function (err, allCities) {
        if (err) return console.error(err);
        console.log("Todas las ciudades desde City.find", allCities);
    })
    res.json({ ciudadesFromRoutes })
});

router.get('/api/cities/:id', async (req, res) => {
    var singleCityFromRoutes = await City.find({ "title": req.params.id }, function (err, singleCity) {
        if (err) return console.error(err);
        console.log("Printing singleCity", singleCity);
    })
    res.json({ singleCityFromRoutes })
});




router.get('/', (req, res) => res.send("Hola amigo, estas en el puerto 5000"));



module.exports = router;
