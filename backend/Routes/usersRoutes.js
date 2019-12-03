const express = require('express')
const router = express.Router();
const User = require('../Schemas/User.js')
const key = require('../Config/config')
const jwt = require("jsonwebtoken")
const passport = require('passport');

router.get('/', async (req, res) => {

    var usersFromRoutes = await User.find(function (err, allUsers) {

        if (err) {
            return console.error(err);
        }

    })

    res.json({ usersFromRoutes })

});


router.get('/:id', async (req, res) => {

    var singleUserFromRoutes = await User.find({ "username": req.params.id }, function (err, singleUser) {

        if (err) {
            return console.error(err);
        }

    })

    res.json({ singleUserFromRoutes })

});

router.post('/adduser', async function (req, res) {


    await User.find({ "email": req.body.email }, async function (err, userFound) {

        if (userFound.length != 0 && req.body.isGoogle === false) {

            return res.send('x')

        } else {

            try {

                const user = new User(req.body);
                await user.save();
                res.send(user);

            } catch (e) {

                res.send(e);

            }
        }
    })
});

router.post('/login', async function (req, res) {

    if (req.body.isGoogle === true) {
        const payload = {
            id: req.body.id,
            username: req.body.username,
            avatarPicture: req.body.urlPicture
        };

        const options = { expiresIn: 2592000 };

        jwt.sign(
            payload,
            key.secretOrKey,
            options,

            (err, token) => {

                if (err) {

                    res.json({
                        success: false,
                        token: "There was an error"
                    });

                } else {

                    res.json({
                        success: true,
                        token: token,
                        image: req.body.image,
                        username: req.body.username
                    });
                }
            }
        );

    } else {

        await User.find({ "email": req.body.email }, async function (err, userFound) {

            if (userFound.length != 0 && userFound[0].password === req.body.password) {

                const payload = {
                    id: userFound[0].id,
                    username: userFound[0].username,
                    avatarPicture: userFound[0].image
                };

                const options = { expiresIn: 2592000 };

                jwt.sign(
                    payload,
                    key.secretOrKey,
                    options,

                    (err, token) => {

                        if (err) {

                            res.json({
                                success: false,
                                token: "There was an error"
                            });

                        } else {

                            res.json({
                                success: true,
                                token: token,
                                image: userFound[0].image,
                                username: userFound[0].username
                            });
                        }
                    }
                );

            } else {

                return res.send('x')

            }

        })

    }
});

router.get('/test/login', passport.authenticate('jwt', { session: false }), (req, res) => {

    User.findOne({ _id: req.user.id })

        .then(user => {

            res.json(user);

        })

        .catch(err => res.status(404).json({ error: "User does not exist!" }));
}
);

module.exports = router;