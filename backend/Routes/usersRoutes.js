const express = require('express')
const router = express.Router();
const User = require('../Schemas/User.js')

router.get('/', async (req, res) => {
    var usersFromRoutes = await User.find(function (err, allUsers) {
        if (err) return console.error(err);
        console.log("Todos los users desde User.find");
    })
    res.json({ usersFromRoutes })
});


router.get('/:id', async (req, res) => {
    var singleUserFromRoutes = await User.find({ "username": req.params.id }, function (err, singleUser) {
        if (err) return console.error(err);
        console.log("Printing singleUser");
    })
    res.json({ singleUserFromRoutes })
});


router.post('/adduser', async function (req, res) {
    try {
        const user = new User(req.body);
        await user.save();
        res.send(user);
    } catch (e) {
        res.send(e);
    }
});



module.exports = router;