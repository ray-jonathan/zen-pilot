// route handlers that will plug-n-play to controller functions

const express = require('express');
const Router = express.Router;
const blogRouter = Router();
const {grabBlogs} = require('../controllers/blog'); // object of functions from controllers page

blogRouter.get('*', grabBlogs);
// blogRouter.post('*', addMatch);

module.exports = blogRouter;