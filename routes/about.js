// route handlers that will plug-n-play to controller functions

const express = require('express');
const Router = express.Router;
const aboutRouter = Router();
const {getAbout} = require('../controllers/about'); // object of functions from controllers page

aboutRouter.get('*', getAbout);

module.exports = aboutRouter;