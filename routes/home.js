// route handlers that will plug-n-play to controller functions

const express = require('express');
const Router = express.Router;
const homeRouter = Router();
const {goHome} = require('../controllers/home'); // object of functions from controllers page

homeRouter.get('*', goHome);
// homeRouter.post('*', addMatch);

module.exports = homeRouter;