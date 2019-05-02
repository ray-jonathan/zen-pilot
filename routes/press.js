// route handlers that will plug-n-play to controller functions

const express = require('express');
const Router = express.Router;
const pressRouter = Router();
const {getPress} = require('../controllers/press'); // object of functions from controllers page

pressRouter.get('*', getPress);

module.exports = pressRouter;