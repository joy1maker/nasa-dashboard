const express = require('express')
const plantesRouter = express.Router();
const { httpGetAllPlantes } = require('./plantes.controller');
plantesRouter.get('/', httpGetAllPlantes)

module.exports = plantesRouter;