const express = require('express');

const welcomeRouter = require('./car-api/welcome-router');
const carsRouter = require('./car-api/cars-router');

const server = express();

server.use(express.json());

server.use('/api', welcomeRouter);
server.use('/api/cars', carsRouter);

module.exports = server;