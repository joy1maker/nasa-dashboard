const express = require('express')
const cors = require('cors');
const morgan = require('morgan');

const path = require('path');

const app = express();
const plantesRouter = require('./routes/planets/plantes.router')
const launchesRouter = require('./routes/launches/launches.router')
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(morgan('combined'));



app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/plantes', plantesRouter)
app.use('/launches', launchesRouter);
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})
module.exports = app;