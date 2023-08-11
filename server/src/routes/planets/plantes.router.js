const express = require('express')
const plantesRouter = express.Router();
const { getAllPlantes } = require('./plantes.controller');
plantesRouter.get('/', getAllPlantes)

module.exports = plantesRouter;