const express = require("express");
const Router = express.Router();
const citiesRouter = require('./citiesRoutes')
const homeRouter = require('./homeRoute')
const itineraryRouter = require('./itineraryRoutes')

Router.use(citiesRouter)
Router.use(homeRouter)
Router.use(itineraryRouter)


module.exports = Router;