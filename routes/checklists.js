// route handlers that will plug-n-play to controller functions

const express = require('express');
const Router = express.Router;
const checklistsRouter = Router();
const {grabChecklists} = require('../controllers/checklists'); // object of functions from controllers page

checklistsRouter.get('*', grabChecklists);
// checklistsRouter.post('*', addMatch);

module.exports = checklistsRouter;