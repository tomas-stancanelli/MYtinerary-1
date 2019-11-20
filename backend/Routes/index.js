const express = require("express");
const Router = express.Router();
const citiesRouter = require('./citiesRoutes')

Router.use(citiesRouter)


module.exports = Router;